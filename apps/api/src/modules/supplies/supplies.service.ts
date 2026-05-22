import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/database/prisma.service';
import { CreateSupplyDto } from './dto/create-supply.dto';

@Injectable()
export class SuppliesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(cycleId: string, dto: CreateSupplyDto) {
    const cycle = await this.prisma.cycle.findUnique({
      where: { id: cycleId },
    });
    if (!cycle) throw new NotFoundException('Ciclo nao encontrado');

    return this.prisma.supply.create({
      data: {
        cycleId,
        type: dto.type,
        quantity: dto.quantity,
        unit: dto.unit,
      },
    });
  }
}
