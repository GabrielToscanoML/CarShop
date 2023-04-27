import { Model, Schema, model, models } from 'mongoose';
import IVehicle from '../Interfaces/IVehicle';

export default class VehiclesODM {
  private schema: Schema;
  private model: Model<IVehicle>;

  constructor() {
    this.schema = new Schema<IVehicle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
    }, { versionKey: false });
    this.model = models.Vehicles || model('Vehicles', this.schema);
  }

  // public async create(cars: IVehicle): Promise<IVehicle> {
  //   if (cars.status === undefined) {
  //     const newCar = {
  //       ...cars,
  //       status: false,
  //     };
  //     return this.model.create({ ...newCar });
  //   }
  //   return this.model.create({ ...cars });
  // }

  // public async find(): Promise<ICar[]> {
  //   return this.model.find();
  // }

  // public async findOne(param: string): Promise<ICar | null> {
  //   return this.model.findOne({ _id: param });
  // }
  // public async updateById(id: string, body: ICar): Promise<ICar | null> {
  //   return this.model.findByIdAndUpdate(
  //     { _id: id },
  //     { ...body } as UpdateQuery<ICar>,
  //   );
  // }
}
