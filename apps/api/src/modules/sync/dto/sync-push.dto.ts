import { IsArray, IsOptional } from 'class-validator';

export class SyncPushDto {
  @IsArray()
  @IsOptional()
  cycles?: any[];

  @IsArray()
  @IsOptional()
  supplies?: any[];

  @IsArray()
  @IsOptional()
  photos?: any[];
}
