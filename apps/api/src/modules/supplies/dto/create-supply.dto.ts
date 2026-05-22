import { IsEnum, IsNotEmpty, IsNumber, Min } from 'class-validator';
import { SupplyType, SupplyUnit } from '@prisma/client';

export class CreateSupplyDto {
  @IsEnum(SupplyType)
  @IsNotEmpty()
  type: SupplyType;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0.01)
  quantity: number;

  @IsEnum(SupplyUnit)
  @IsNotEmpty()
  unit: SupplyUnit;
}
