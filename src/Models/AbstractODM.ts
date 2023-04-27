import { Model, Schema, UpdateQuery, model, models } from 'mongoose';

export default abstract class AbstractODM<T> {
  private schema: Schema;
  private model: Model<T>;
  private modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(modelName, this.schema);
  }

  public async create(vehicle: T): Promise<T> {
    return this.model.create({ ...vehicle });
  }

  public async find(): Promise<T[]> {
    return this.model.find();
  }

  public async findOne(id: string): Promise<T | null> {
    return this.model.findOne({ _id: id });
  }
  public async updateById(id: string, body: Partial<T>): Promise<T | null> {
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...body } as UpdateQuery<T>,
    );
  }
}
