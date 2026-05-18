import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCycleDto } from './dto/create-cycle.dto';
import { FinishCycleDto } from './dto/update-cycle.dto';

@Injectable()
export class CyclesService {
    constructor(private prisma: PrismaService) { }

    async start(dto: CreateCycleDto) {
        // Regra: Não permitir dois ciclos ativos (IN_PROGRESS) para o mesmo líder
        const activeCycle = await this.prisma.cycle.findFirst({
            where: { userId: dto.userId, status: 'IN_PROGRESS' },
        });

        if (activeCycle) {
            throw new BadRequestException('Você já possui um ciclo em andamento.');
        }

        return this.prisma.cycle.create({
            data: {
                userId: dto.userId,
                sectionCode: dto.sectionCode,
                status: 'IN_PROGRESS',
                startedAt: new Date(),
                startLat: dto.startLat,
                startLng: dto.startLng,
            },
        });
    }

    async finish(id: string, dto: FinishCycleDto) {
        const cycle = await this.prisma.cycle.findUnique({ where: { id } });

        if (!cycle) throw new NotFoundException('Ciclo não encontrado.');
        if (cycle.status === 'FINISHED') throw new BadRequestException('Este ciclo já foi encerrado.');

        return this.prisma.cycle.update({
            where: { id },
            data: {
                status: 'FINISHED',
                endedAt: new Date(),
                endLat: dto.endLat,
                endLng: dto.endLng,
            },
        });
    }
}