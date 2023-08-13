import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { createPetDto } from '../dto/create.dto';

@Controller('pets')
export class PetsController {
  @Get()
  listPets() {}

  @Post()
  createPet(@Body() body: createPetDto) {
    console.log(body);
  }

  @Get('/:id')
  getPet(@Param('id') id: string) {
    console.log(id);
  }
}
