import { Model, Schema, UpdateQuery, model, models } from 'mongoose';
import IMotoCycle from '../Interfaces/IMotorcycle';

export default class MotosODM {
  private schema: Schema;
  private model: Model<IMotoCycle>;

  constructor() {
    this.schema = new Schema<IMotoCycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    }, { versionKey: false });
    this.model = models.MotoCycles || model('MotoCycles', this.schema);
  }

  public async create(motos: IMotoCycle): Promise<IMotoCycle> {
    if (motos.status === undefined) {
      const newMoto = {
        ...motos,
        status: false,
      };
      return this.model.create({ ...newMoto });
    }
    return this.model.create({ ...motos });
  }

  public async find(): Promise<IMotoCycle[]> {
    return this.model.find();
  }

  public async findOne(param: string): Promise<IMotoCycle | null> {
    return this.model.findOne({ _id: param });
  }

  public async updateById(id: string, body: IMotoCycle): Promise<IMotoCycle | null> {
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...body } as UpdateQuery<IMotoCycle>,
    );
  }
}
