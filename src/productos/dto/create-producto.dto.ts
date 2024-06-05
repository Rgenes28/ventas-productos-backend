// create-producto.dto.ts

import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateProductoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsNumber()
  @IsNotEmpty()
  precio: number;

  @IsString()
  descripcion: string;

  @IsNumber()
  @IsNotEmpty()
  stock: number;
}

export default CreateProductoDto; // Si necesitas exportar la clase por defecto

