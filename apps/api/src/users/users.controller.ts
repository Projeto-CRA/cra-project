import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Usuários')
@Controller('users')
export class UsersController {
  // Removemos o constructor que pedia o UsersService
  
  @Get()
  @ApiOperation({ summary: 'Lista todos os usuários do sistema (Simulado)' })
  @ApiResponse({ status: 200, description: 'Sucesso' })
  findAll() {
    // Retorno fixo apenas para o Swagger validar a rota
    return [{ id: 1, nome: 'Usuário Teste', role: 'ADMIN' }];
  }
}