import { Model, Schema, model, models } from 'mongoose';
// import { ICar } from '../Interfaces';
import ICar from '../Interfaces';

export default class CarsODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      // id: { type: String, required: true },
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Cars || model('Cars', this.schema);
  }

  public async create(cars: ICar): Promise<ICar> {
    if (cars.status === undefined) {
      const newCar = {
        ...cars,
        status: false,
      };
      return this.model.create({ ...newCar });
    }
    return this.model.create({ ...cars });
  }
}
