import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async create(dto: CreateUserDto) {
        // Verifica unicidade do e-mail
        const emailExists = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });

        if (emailExists) {
            throw new ConflictException('Este e-mail já está cadastrado no sistema.');
        }

        // Hash da senha conforme Documentação
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(dto.password, salt);

        // Persistência no PostgreSQL via Prisma
        return this.prisma.user.create({
            data: {
                email: dto.email,
                passwordHash, // Mapeia para password_hash no banco
                fullName: dto.fullName, // Mapeia para full_name no banco
                role: dto.role,
                isActive: true,
            },
            select: { // Retorna o objeto criado sem a senha por segurança
                id: true,
                email: true,
                fullName: true,
                role: true,
                createdAt: true,
            }
        });
    }

    async findById(id: string) {
        return this.prisma.user.findUnique({ where: { id } });
    }
}