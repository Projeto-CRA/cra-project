import { IsString, IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class CreateCycleDto {
    @IsUUID('4', { message: 'ID do usuário inválido.' })
    @IsNotEmpty()
    userId: string;

    @IsString()
    @IsNotEmpty({ message: 'O código do trecho (sectionCode) é obrigatório.' })
    sectionCode: string;

    @IsNumber()
    @IsNotEmpty()
    startLat: number;

    @IsNumber()
    @IsNotEmpty()
    startLng: number;
}