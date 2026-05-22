import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { PhotoMoment } from '@prisma/client';

export class CreatePresignedUrlDto {
  @IsEnum(PhotoMoment)
  @IsNotEmpty()
  moment: PhotoMoment;

  @IsNumber()
  @IsNotEmpty()
  latitude: number;

  @IsNumber()
  @IsNotEmpty()
  longitude: number;
}
