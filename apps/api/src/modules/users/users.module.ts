import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
    controllers: [UsersController],
    providers: [UsersService, PrismaService],
    exports: [UsersService], // Exportado para uso no módulo de Autenticação
})
export class UsersModule { }