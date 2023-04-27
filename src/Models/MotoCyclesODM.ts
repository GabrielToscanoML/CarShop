import { Schema } from 'mongoose';
import IMotoCycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

export default class MotosODM extends AbstractODM<IMotoCycle> {
  constructor() {
    const schema = new Schema<IMotoCycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, default: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    }, { versionKey: false });
    super(schema, 'MotorCycle');
  }
}
