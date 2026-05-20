import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Usuários')
@Controller('users')
export class UsersController {
  @Get()
  @ApiOperation({ summary: 'Lista todos os usuários do sistema (Simulado)' })
  @ApiResponse({ status: 200, description: 'Sucesso' })
  findAll() {
    return [{ id: 1, nome: 'Usuário Teste', role: 'ADMIN' }];
  }
}