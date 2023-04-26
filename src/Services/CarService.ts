import Car from '../Domains/Car';
import { ICar } from '../Interfaces';
import CarsODM from '../Models/CarsODM';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) return new Car(car);
    return null;
  }

  public async createCar(car: ICar) {
    const carsODM = new CarsODM();
    const newCar = await carsODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async getAllCars() {
    const carsODM = new CarsODM();
    const allCars = await carsODM.find();
    const result = allCars.map((car: ICar) => this.createCarDomain(car));
    return result;
  }

  public async getCarByID(id: string) {
    const carsODM = new CarsODM();
    const car = await carsODM.findOne(id);
    return this.createCarDomain(car);
  }
}

export default CarService;