import IMotocycle from '../../../src/Interfaces/IMotorcycle';

export const motoInput: IMotocycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

export const motoOutput: IMotocycle = {
  id: '6348513f34c397abcad040b2',
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

export const motosArray: IMotocycle[] = [
  {
    id: '123456',
    model: 'Biz',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '654321',
    model: 'Biz',
    year: 2005,
    color: 'Red',
    status: true,
    buyValue: 10.000,
    category: 'Street',
    engineCapacity: 600,
  },
];