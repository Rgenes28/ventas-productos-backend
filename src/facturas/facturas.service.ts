import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Factura } from './interfaces/factura.interface';
import { CreateFacturaDto } from './dto/create-factura.dto';

@Injectable()
export class FacturasService {
  constructor(@InjectModel('Factura') private readonly facturaModel: Model<Factura>) {}

  async findAll(): Promise<Factura[]> {
    return this.facturaModel.find().exec();
  }

  async findOne(id: string): Promise<Factura> {
    return this.facturaModel.findById(id).exec();
  }

  async create(createFacturaDto: CreateFacturaDto): Promise<Factura> {
    const createdFactura = new this.facturaModel(createFacturaDto);
    return createdFactura.save();
  }
  

  async update(id: string, updateFacturaDto: CreateFacturaDto): Promise<Factura> {
    return this.facturaModel.findByIdAndUpdate(id, updateFacturaDto, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return this.facturaModel.findByIdAndDelete(id).exec();
  }
}
