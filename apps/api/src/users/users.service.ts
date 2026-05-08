import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

export type User = any; // Representação genérica, pode ser refinada com interface

@Injectable()
export class UsersService {
  // Simulando um banco de dados em memória
  private readonly users: User[] = [];

  async findByUsername(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async findById(id: string): Promise<User | undefined> {
    return this.users.find((user) => user.id === id);
  }

  async create(user: any): Promise<User> {
    // Hasheando a senha com bcrypt antes de salvar
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(user.password, saltOrRounds);
    
    const newUser = {
      ...user,
      id: Date.now().toString(), // id fictício
      password: hashedPassword,
      refreshToken: null,
    };
    
    this.users.push(newUser);
    
    // Retornamos o usuário sem a senha (boas práticas)
    const { password, ...result } = newUser;
    return result;
  }

  async updateRefreshToken(id: string, refreshToken: string | null): Promise<void> {
    const userIndex = this.users.findIndex(u => u.id === id);
    if (userIndex > -1) {
      if (refreshToken) {
        // Salvar hash do refresh token (para segurança extra)
        const saltOrRounds = 10;
        this.users[userIndex].refreshToken = await bcrypt.hash(refreshToken, saltOrRounds);
      } else {
        // Remover refresh token no logout
        this.users[userIndex].refreshToken = null;
      }
    }
  }
}
