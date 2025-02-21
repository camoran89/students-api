import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('Students API')
    .setDescription('API para gestionar estudiantes con autenticación JWT')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Configuración global
  app.enableCors();

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  Logger.log(`🚀 Server running on http://localhost:${PORT}`, 'Bootstrap');
  Logger.log(
    `📑 Swagger available at http://localhost:${PORT}/api`,
    'Bootstrap',
  );
}

bootstrap();
