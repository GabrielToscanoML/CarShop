import { expect } from 'chai';
import Sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { creatingCarInput, creatingCarResult } from '../mocks/carMocks';
import MotoService from '../../../src/Services/MotoService';
import { motoInput, motoOutput } from '../mocks/motoMocks';

describe('Testando se é possível atualizar as informações ', function () {
  afterEach(Sinon.restore);
  it('Atualizando um carro com sucesso', async function () {
    Sinon.stub(Model, 'findOneAndUpdate').resolves(creatingCarResult);
    Sinon.stub(Model, 'findOne').resolves(creatingCarResult);
    const carService = new CarService();
    const result = await carService.updateByID('644a736e471aafc84ed7a68f', creatingCarInput);
    expect(result).to.be.deep.equal(creatingCarResult);
  });

  it('Atualizando uma moto com sucesso', async function () {
    Sinon.stub(Model, 'findOneAndUpdate').resolves(motoOutput);
    Sinon.stub(Model, 'findOne').resolves(motoOutput);
    const motoService = new MotoService();
    const result = await motoService.updateByID('6348513f34c397abcad040b2', motoInput);
    expect(result).to.be.deep.equal(motoOutput);
  });
});