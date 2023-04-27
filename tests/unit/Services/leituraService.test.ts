import { expect } from 'chai';
import Sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { carsArray } from '../mocks/carMocks';
import MotoService from '../../../src/Services/MotoService';
import { motosArray } from '../mocks/motoMocks';

describe('Testando se é possível buscar as informações ', function () {
  afterEach(Sinon.restore);
  it('Buscando todos os carros com sucesso', async function () {
    const carService = new CarService();
    Sinon.stub(Model, 'find').resolves(carsArray);
    const result = await carService.getAllCars();
    expect(result).to.have.length.greaterThan(0);
  });

  it('Buscando todas as motos com sucesso', async function () {
    const motoService = new MotoService();
    Sinon.stub(Model, 'find').resolves(motosArray);
    const result = await motoService.getAllMotos();
    expect(result).to.have.length.greaterThan(0);
  });
});
