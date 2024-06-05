import { IsArray, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateFacturaDto {
  @IsArray()
  @IsNotEmpty()
  productos: string[]; // Array of Product IDs

  @IsNumber()
  @IsNotEmpty()
  total: number;
}
