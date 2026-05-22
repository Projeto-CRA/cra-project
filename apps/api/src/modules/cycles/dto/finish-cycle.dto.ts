import { IsNumber, IsOptional } from 'class-validator';

export class FinishCycleDto {
  @IsNumber()
  @IsOptional()
  latitude?: number;

  @IsNumber()
  @IsOptional()
  longitude?: number;
}
