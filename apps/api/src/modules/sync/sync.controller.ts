import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { SyncService } from './sync.service';
import { SyncPushDto } from './dto/sync-push.dto';

@ApiTags('Sync')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('sync')
export class SyncController {
  constructor(private readonly syncService: SyncService) {}

  @Post('push')
  @ApiOperation({ summary: 'Envio em lote (offline sync)' })
  push(@Body() dto: SyncPushDto) {
    return this.syncService.push(dto);
  }
}
