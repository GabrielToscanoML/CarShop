import { NextFunction, Request, Response } from 'express';
import IMoto from '../Interfaces/IMotocycle';
import MotoService from '../Services/MotoService';

class MotoController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotoService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotoService();
  }

  public async create() {
    const moto: IMoto = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.doorsQty,
      engineCapacity: this.req.body.seatsQty,
    };

    try {
      const newMoto = await this.service.createMoto(moto);
      return this.res.status(201).json(newMoto);
    } catch (error) {
      this.next(error);
    }
  }

  public async find() {
    try {
      const allMotos = await this.service.getAllMotos;
      return this.res.status(200).json(allMotos);
    } catch (error) {
      this.next(error);
    }
  }

  public async findById() {
    try {
      const { id } = this.req.params;
      const moto = await this.service.getMotoByID(id);
      if (!moto) return this.res.status(404).json({ message: 'Motorcycle not found' });
      return this.res.status(200).json(moto);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }

  public async update() {
    try {
      const { id } = this.req.params;
      const { body } = this.req;
      const motoExists = await this.service.getMotoByID(id);
      if (!motoExists) return this.res.status(404).json({ message: 'Motorcycle not found' });
      const moto = await this.service.updateByID(id, body);
      return this.res.status(200).json(moto);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
}
  
export default MotoController;