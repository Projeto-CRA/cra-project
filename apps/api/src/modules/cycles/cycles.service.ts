import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../../infrastructure/database/prisma.service';
import { CreateCycleDto } from './dto/create-cycle.dto';
import { FinishCycleDto } from './dto/finish-cycle.dto';
import { CycleStatus } from '@prisma/client';

@Injectable()
export class CyclesService {
  constructor(private readonly prisma: PrismaService) {}_

  async findAllByUser(userId: string, filters: { status?: string }) {
    return this.prisma.cycle.findMany({
      where: {
        userId,
        ...(filters.status && { status: filters.status as CycleStatus }),
      },
      include: { supplies: true, photos: true },
      orderBy: { startedAt: 'desc' },
    });
  }

  async create(userId: string, dto: CreateCycleDto) {
    const hasActiveCycle = await this.prisma.cycle.findFirst({
      where: { userId, status: { in: ['IN_PROGRESS', 'PAUSED'] } },
    });

    if (hasActiveCycle) {
      throw new ConflictException(
        'Usuario ja possui um ciclo ativo. Encerre antes de iniciar outro.',
      );
    }

    return this.prisma.cycle.create({
      data: {
        userId,
        sectionCode: dto.sectionCode,
        status: 'IN_PROGRESS',
        startedAt: new Date(),
        startLat: dto.latitude,
        startLng: dto.longitude,
      },
    });
  }

  async finish(id: string, userId: string, dto: FinishCycleDto) {
    const cycle = await this.prisma.cycle.findFirst({
      where: { id, userId },
    });

    if (!cycle) {
      throw new NotFoundException('Ciclo nao encontrado');
    }

    if (cycle.status === 'FINISHED') {
      throw new ConflictException('Ciclo ja foi encerrado');
    }

    return this.prisma.cycle.update({
      where: { id },
      data: {
        status: 'FINISHED',
        endedAt: new Date(),
        endLat: dto.latitude,
        endLng: dto.longitude,
      },
    });
  }
}
