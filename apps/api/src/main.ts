import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module'; 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Consórcio Recife Ambiental - API')
    .setDescription(
      'Documentação oficial das rotas e serviços da API do Consórcio Recife Ambiental. Desenvolvido para o gerenciamento inteligente de resíduos e operações municipais na Sprint 2.',
    )
    .setVersion('1.0')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
  
  console.log(`---`);
  console.log(`🚀 API Rodando em: http://localhost:3000`);
  console.log(`📑 Documentação em: http://localhost:3000/api/docs`);
  console.log(`---`);
}
bootstrap();