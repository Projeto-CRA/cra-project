import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/database/prisma.service';
import { SyncPushDto } from './dto/sync-push.dto';

@Injectable()
export class SyncService {
  private readonly logger = new Logger(SyncService.name);

  constructor(private readonly prisma: PrismaService) {}

  async push(dto: SyncPushDto) {
    const result = {
      cyclesProcessed: 0,
      suppliesProcessed: 0,
      photosProcessed: 0,
    };

    if (dto.cycles && dto.cycles.length > 0) {
      this.logger.log(`Processando ${dto.cycles.length} ciclos`);
      result.cyclesProcessed = dto.cycles.length;
    }

    if (dto.supplies && dto.supplies.length > 0) {
      this.logger.log(`Processando ${dto.supplies.length} insumos`);
      result.suppliesProcessed = dto.supplies.length;
    }

    if (dto.photos && dto.photos.length > 0) {
      this.logger.log(`Processando ${dto.photos.length} fotos`);
      result.photosProcessed = dto.photos.length;
    }

    return result;
  }
}
