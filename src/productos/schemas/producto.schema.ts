import { Schema } from 'mongoose';

export const ProductoSchema = new Schema({
  nombre: String,
  precio: Number,
  descripcion: String,
  stock: Number,
});