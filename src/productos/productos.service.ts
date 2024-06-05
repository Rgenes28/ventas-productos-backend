import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Producto } from './interfaces/producto.interface';
import { CreateProductoDto } from './dto/create-producto.dto';

@Injectable()
export class ProductosService {
  constructor(@InjectModel('Producto') private readonly productoModel: Model<Producto>) {}

  async findAll(): Promise<Producto[]> {
    return this.productoModel.find().exec();
  }

  async findOne(id: string): Promise<Producto> {
    return this.productoModel.findById(id).exec();
  }

  async create(createProductoDto: CreateProductoDto): Promise<Producto> {
    const createdProducto = new this.productoModel(createProductoDto);
    return createdProducto.save();
  }

  async update(id: string, updateProductoDto: CreateProductoDto): Promise<Producto> {
    return this.productoModel.findByIdAndUpdate(id, updateProductoDto, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return this.productoModel.findByIdAndDelete(id).exec(); 
  }
}