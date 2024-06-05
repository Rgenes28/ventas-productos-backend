import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Get()
  findAll() {
    return this.productosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productosService.findOne(id);
  }

  @Post()
  create(@Body() createProductoDto: CreateProductoDto) {
    return this.productosService.create(createProductoDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductoDto: CreateProductoDto) {
    return this.productosService.update(id, updateProductoDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productosService.delete(id);
  }
}
