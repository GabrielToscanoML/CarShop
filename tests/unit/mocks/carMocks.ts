import ICar from '../../../src/Interfaces/ICar';

export const creatingCarInput: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Red',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

export const creatingCarResult: ICar = {
  id: '644a736e471aafc84ed7a68f',
  model: 'Marea',
  year: 2002,
  color: 'Red',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

export const carsArray: ICar[] = [
  {
    id: '123456',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '654321',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    buyValue: 39.000,
    doorsQty: 2,
    seatsQty: 5,
  },
];
