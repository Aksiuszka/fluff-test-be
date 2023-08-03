import { Controller, Get, Post } from '@nestjs/common';

@Controller('pets')
export class PetsController {
    @Get()
    listPets(){}

    @Post()
    createPet(){}
    
    @Get('/:id')
    getPet(){}
}
