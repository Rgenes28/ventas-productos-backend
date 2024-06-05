import { Document } from 'mongoose';

export interface Factura extends Document {
  readonly productos: string[];
  readonly total: number;
  readonly fecha: Date;
}