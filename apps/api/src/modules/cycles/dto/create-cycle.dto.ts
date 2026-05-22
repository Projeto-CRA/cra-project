import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateCycleDto {
  @IsString()
  @IsNotEmpty({ message: 'O código do trecho (sectionCode) é obrigatório.' })
  sectionCode: string;

  @IsNumber()
  @IsOptional()
  latitude?: number;

  @IsNumber()
  @IsOptional()
  longitude?: number;
}
