import { DocumentBuilder } from '@nestjs/swagger';

const swaggerConfig = new DocumentBuilder()
  .setTitle('Application Api Docs')
  .setDescription('Application Api Docs Description')
  .setVersion('0.1')
  .build();

export { swaggerConfig };
