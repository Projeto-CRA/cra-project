import { Controller, Post, Patch, Body, Param, Get } from '@nestjs/common';
import { CyclesService } from './cycles.service';
import { CreateCycleDto } from './dto/create-cycle.dto';
import { FinishCycleDto } from './dto/update-cycle.dto';

@Controller('cycles')
export class CyclesController {
    constructor(private readonly cyclesService: CyclesService) { }

    @Post('start')
    async start(@Body() createCycleDto: CreateCycleDto) {
        return this.cyclesService.start(createCycleDto);
    }

    @Patch(':id/finish')
    async finish(
        @Param('id') id: string,
        @Body() finishCycleDto: FinishCycleDto,
    ) {
        return this.cyclesService.finish(id, finishCycleDto);
    }
}