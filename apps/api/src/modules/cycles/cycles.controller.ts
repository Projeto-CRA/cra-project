import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { CyclesService } from './cycles.service';
import { CreateCycleDto } from './dto/create-cycle.dto';
import { FinishCycleDto } from './dto/finish-cycle.dto';

@ApiTags('Cycles')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('cycles')
export class CyclesController {
  constructor(private readonly cyclesService: CyclesService) {}

  @Get()
  @ApiOperation({ summary: 'Lista ciclos do usuario autenticado' })
  findAll(@CurrentUser('id') userId: string, @Query('status') status?: string) {
    return this.cyclesService.findAllByUser(userId, { status });
  }

  @Post()
  @ApiOperation({ summary: 'Cria novo ciclo' })
  create(@CurrentUser('id') userId: string, @Body() dto: CreateCycleDto) {
    return this.cyclesService.create(userId, dto);
  }

  @Patch(':id/finish')
  @ApiOperation({ summary: 'Encerra ciclo' })
  finish(
    @Param('id') id: string,
    @CurrentUser('id') userId: string,
    @Body() dto: FinishCycleDto,
  ) {
    return this.cyclesService.finish(id, userId, dto);
  }
}
