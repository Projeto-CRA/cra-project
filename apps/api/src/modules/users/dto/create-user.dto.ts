import { IsEmail, IsString, MinLength, IsEnum, IsNotEmpty } from 'class-validator';
import { UserRole } from '@prisma/client';

export class CreateUserDto {
    @IsEmail({}, { message: 'O e-mail informado é inválido.' })
    @IsNotEmpty({ message: 'O e-mail é obrigatório.' })
    email: string;

    @IsString()
    @MinLength(8, { message: 'A senha deve conter no mínimo 8 caracteres.' })
    password: string;

    @IsString()
    @IsNotEmpty({ message: 'O nome completo é obrigatório.' })
    fullName: string;

    @IsEnum(UserRole, { message: 'O papel (role) deve ser LEADER, SUPERVISOR ou ADMIN.' })
    role: UserRole;
}