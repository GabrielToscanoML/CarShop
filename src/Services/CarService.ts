import Car from '../Domains/Car';
import ICar from '../Interfaces';
import CarsODM from '../Models/CarsODM';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(
        car,
        // car.model,
        // car.year,
        // car.color,
        // car.buyValue,
        // car.doorsQty,
        // car.seatsQty,
        // car.status,
        // car.id,
      );
    }
    return null;
  }

  public async createCar(car: ICar) {
    const carsODM = new CarsODM();
    const newCar = await carsODM.create(car);
    return this.createCarDomain(newCar);
  }
}

export default CarService;