import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, refreshToken, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    
    const accessToken = this.jwtService.sign(payload, {
      expiresIn: '15m', // tempo de expiração curto conforme critério de aceite
      secret: process.env.JWT_ACCESS_SECRET || 'access_secret_dev',
    });

    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: '7d', // fluxo de Refresh Token seguro para manter a sessão
      secret: process.env.JWT_REFRESH_SECRET || 'refresh_secret_dev',
    });

    await this.usersService.updateRefreshToken(user.id, refreshToken);

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  async refreshTokens(userId: string, refreshToken: string) {
    const user = await this.usersService.findById(userId);
    if (!user || !user.refreshToken) {
      throw new UnauthorizedException('Access Denied');
    }

    const refreshTokenMatches = await bcrypt.compare(refreshToken, user.refreshToken);
    if (!refreshTokenMatches) {
      throw new UnauthorizedException('Access Denied');
    }

    // Se válido, geramos novos tokens
    return this.login(user);
  }

  async logout(userId: string) {
    await this.usersService.updateRefreshToken(userId, null);
  }

  async register(userDto: any) {
    const existingUser = await this.usersService.findByUsername(userDto.username);
    if (existingUser) {
      throw new UnauthorizedException('User already exists');
    }
    return this.usersService.create(userDto);
  }
}
