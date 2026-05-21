import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  const config = new DocumentBuilder()
    .setTitle('Consórcio Recife Ambiental - API')
    .setDescription('Documentação técnica das rotas desenvolvidas pela equipe.')
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