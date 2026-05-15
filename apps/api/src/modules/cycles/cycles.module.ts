import { Module } from '@nestjs/common';
import { CyclesService } from './cycles.service';
import { CyclesController } from './cycles.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
    controllers: [CyclesController],
    providers: [CyclesService, PrismaService],
    exports: [CyclesService],
})
export class CyclesModule { }