import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import * as csurf from 'csurf';

import { AppModule } from './app/app.module';
import { swaggerConfig } from './configs/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 配置跨域
  app.enableCors();
  // 配置 CSRF
  app.use(cookieParser());
  app.use(csurf({ cookie: true }));
  // 配置 Swagger
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-docs', app, swaggerDocument);

  await app.listen(3000);
}
bootstrap();
