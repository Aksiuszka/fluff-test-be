import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { PetsModule } from './pets/pets.module';

async function bootstrap() {
  const app = await NestFactory.create(PetsModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
