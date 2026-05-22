import { Module } from '@nestjs/common';
import { PhotosController } from './photos.controller';
import { S3Service } from './services/s3.service';
import { PrismaService } from '../../infrastructure/database/prisma.service';

@Module({
  controllers: [PhotosController],
  providers: [S3Service, PrismaService],
})
export class PhotosModule {}
