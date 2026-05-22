import { Module } from '@nestjs/common';
import { SuppliesService } from './supplies.service';
import { SuppliesController } from './supplies.controller';
import { PrismaService } from '../../infrastructure/database/prisma.service';

@Module({
  controllers: [SuppliesController],
  providers: [SuppliesService, PrismaService],
  exports: [SuppliesService],
})
export class SuppliesModule {}
