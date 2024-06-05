import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductosService } from './productos.service';
import { ProductoSchema } from './schemas/producto.schema';
import { ProductosController } from './productos.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Producto', schema: ProductoSchema }])],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}