import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// Adicionamos a importação do seu controller do Swagger
import { UsersController } from './users/users.controller';

@Module({
  imports: [],
  controllers: [
    AppController, 
    UsersController // Colocamos o seu controller aqui para o NestJS ativar a rota
  ],
  providers: [AppService],
})
export class AppModule {}