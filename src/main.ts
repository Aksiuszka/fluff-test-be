import { NestFactory } from '@nestjs/core';
import { PetsModule } from './pets/pets.module';

async function bootstrap() {
  const app = await NestFactory.create(PetsModule);
  await app.listen(3000);
}
bootstrap();
