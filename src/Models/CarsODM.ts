import { Model, Schema, UpdateQuery, model, models } from 'mongoose';
import ICar from '../Interfaces/ICar';

export default class CarsODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    }, { versionKey: false });
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

  public async find(): Promise<ICar[]> {
    return this.model.find();
  }

  public async findOne(param: string): Promise<ICar | null> {
    return this.model.findOne({ _id: param });
  }
  public async updateById(id: string, body: ICar): Promise<ICar | null> {
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...body } as UpdateQuery<ICar>,
    );
  }
}

// // {
// //   
// // },
// { ...body },
// if (body.status === undefined) {
//   const carWithStatus = {
//     ...body,
//     status: false,
//   };
//   console.log('novo carro', carWithStatus);
//   return this.model.findOneAndUpdate(
//     { _id: id },
//     // {
//     //   model: body.model,
//     //   year: body.year,
//     //   color: body.color,
//     //   status: body.status,
//     //   buyValue: body.buyValue,
//     //   doorsQty: body.doorsQty,
//     //   seatsQty: body.seatsQty,
//     // },
//     { ...carWithStatus },
//   );
// }
