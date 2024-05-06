import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './logger/logger.middleware';
import { HttpExceptionFilter } from './error/error';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
