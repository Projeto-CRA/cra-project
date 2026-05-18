import { IsNumber, IsNotEmpty } from 'class-validator';

export class FinishCycleDto {
    @IsNumber()
    @IsNotEmpty()
    endLat: number;

    @IsNumber()
    @IsNotEmpty()
    endLng: number;
}