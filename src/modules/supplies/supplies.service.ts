import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SuppliesService {
    constructor(private prisma: PrismaService) { }

    async create(data: any) {
        // 1. Verificar se o ciclo existe antes de adicionar o insumo
        const cycle = await this.prisma.cycle.findUnique({
            where: { id: data.cycleId },
        });

        if (!cycle) {
            throw new NotFoundException('Ciclo de atividade não encontrado.');
        }

        // 2. Criar o registo de insumo (Supply) conforme o dicionário de dados
        return this.prisma.supply.create({
            data: {
                cycleId: data.cycleId,
                type: data.type,      // NYLON ou GASOLINE
                quantity: data.quantity,
                unit: data.unit,      // METER ou LITER
            },
        });
    }

    async findByCycle(cycleId: string) {
        return this.prisma.supply.findMany({
            where: { cycleId },
        });
    }
}