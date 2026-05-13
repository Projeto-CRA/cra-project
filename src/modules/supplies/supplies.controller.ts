import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { SuppliesService } from './supplies.service';

@Controller('supplies') // Endpoint: https://api.cra.pe.gov.br/v1/supplies
export class SuppliesController {
    constructor(private readonly suppliesService: SuppliesService) { }

    @Post()
    async registerSupply(@Body() body: any) {
        // Rota chamada pelo líder para informar, por exemplo, que usou 2L de gasolina
        return this.suppliesService.create(body);
    }

    @Get('cycle/:cycleId')
    async getByCycle(@Param('cycleId') cycleId: string) {
        return this.suppliesService.findByCycle(cycleId);
    }
}