import IVehicle from './IVehicle';

export type Category = 'Street' | 'Custom' | 'Trail';

export default interface IMotocycle extends IVehicle{
  category: Category;
  engineCapacity: number;
}