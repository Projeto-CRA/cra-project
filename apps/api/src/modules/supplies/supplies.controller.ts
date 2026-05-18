import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { SuppliesService } from './supplies.service';
import { CreateSupplyDto } from './dto/create-supply.dto';

@Controller('supplies')
export class SuppliesController {
    constructor(private readonly suppliesService: SuppliesService) { }

    @Post()
    async create(@Body() createSupplyDto: CreateSupplyDto) {
        // Rota: POST /v1/supplies
        return this.suppliesService.create(createSupplyDto);
    }

    @Get('cycle/:cycleId')
    async findAllByCycle(@Param('cycleId') cycleId: string) {
        // Rota: GET /v1/supplies/cycle/:cycleId
        return this.suppliesService.findByCycle(cycleId);
    }
}