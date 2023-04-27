import IMotoCycle, { Category } from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: Category;
  private engineCapacity: number;

  constructor(
    moto: IMotoCycle,
  ) {
    super(moto);
    this.category = moto.category;
    this.engineCapacity = moto.engineCapacity;
  }

  public setCategory(category: Category) {
    this.category = category;
  }

  public getCategory() {
    return this.category;
  }

  public setEngineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }

  public getEngineCapacity() {
    return this.engineCapacity;
  }
}

export default Motorcycle;