import { Schema } from 'mongoose';

export const FacturaSchema = new Schema({
  productos: [{
    nombre: String,
    precio: Number
  }],
  total: Number,
  fecha: { type: Date, default: Date.now },
});
