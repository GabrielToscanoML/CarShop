import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
// import { ICar } from '../Interfaces';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.createCar(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async find() {
    try {
      const allCars = await this.service.getAllCars();
      return this.res.status(200).json(allCars);
    } catch (error) {
      this.next(error);
    }
  }

  public async findById() {
    try {
      const { id } = this.req.params;
      const car = await this.service.getCarByID(id);
      if (!car) return this.res.status(404).json({ message: 'Car not found' });
      return this.res.status(200).json(car);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }

  public async update() {
    try {
      const { id } = this.req.params;
      const { body } = this.req;
      const carExists = await this.service.getCarByID(id);
      if (!carExists) return this.res.status(404).json({ message: 'Car not found' });
      const car = await this.service.updateByID(id, body);
      return this.res.status(200).json(car);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
}
  
export default CarController;