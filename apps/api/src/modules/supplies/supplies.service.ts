import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateSupplyDto } from './dto/create-supply.dto';

@Injectable()
export class SuppliesService {
    constructor(private prisma: PrismaService) { }

    async create(dto: CreateSupplyDto) {
        // 1. Validar se o ciclo existe antes de registar o insumo
        const cycle = await this.prisma.cycle.findUnique({
            where: { id: dto.cycleId },
        });

        if (!cycle) {
            throw new NotFoundException('Ciclo de atividade não encontrado.');
        }

        // 2. Criar o registo no PostgreSQL
        return this.prisma.supply.create({
            data: {
                cycleId: dto.cycleId,
                type: dto.type,
                quantity: dto.quantity,
                unit: dto.unit,
            },
        });
    }

    async findByCycle(cycleId: string) {
        return this.prisma.supply.findMany({
            where: { cycleId },
            orderBy: { createdAt: 'desc' },
        });
    }
}