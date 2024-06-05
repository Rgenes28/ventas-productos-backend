import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FacturasController } from './facturas.controller';
import { FacturasService } from './facturas.service';
import { ProductoSchema } from '../productos/schemas/producto.schema';
import { FacturaSchema } from './schemas/facturas.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Factura', schema: FacturaSchema }]),
    MongooseModule.forFeature([{ name: 'Producto', schema: ProductoSchema }]),
  ],
  controllers: [FacturasController],
  providers: [FacturasService],
})
export class FacturasModule {}