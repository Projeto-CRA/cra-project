import { IsEnum, IsNumber, IsNotEmpty, IsUUID, Min } from 'class-validator';
import { SupplyType, SupplyUnit } from '@prisma/client';

export class CreateSupplyDto {
    @IsUUID('4', { message: 'ID do ciclo inválido.' })
    @IsNotEmpty()
    cycleId: string;

    @IsEnum(SupplyType, { message: 'O tipo deve ser NYLON ou GASOLINE.' })
    type: SupplyType;

    @IsNumber({}, { message: 'A quantidade deve ser um número.' })
    @Min(0.01, { message: 'A quantidade deve ser maior que zero.' })
    quantity: number;

    @IsEnum(SupplyUnit, { message: 'A unidade deve ser METER ou LITER.' })
    unit: SupplyUnit;
}