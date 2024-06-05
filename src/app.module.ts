import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductosModule } from './productos/productos.module';
import { FacturasModule } from './facturas/facturas.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://ronaldogenes:ronaldogenes1@cluster0.kqol5ab.mongodb.net/venta_productos?retryWrites=true&w=majority&appName=Cluster0'),
    ProductosModule,
    FacturasModule,
  ],
})
export class AppModule {}

