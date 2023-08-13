import { IsString } from 'class-validator';

export class createPetDto {
  @IsString()
  content: string;
}
