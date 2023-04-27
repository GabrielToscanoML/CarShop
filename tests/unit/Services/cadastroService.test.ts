import { expect } from 'chai';
import Sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { creatingCarInput, creatingCarResult } from '../mocks/carMocks';
import MotoService from '../../../src/Services/MotoService';
import { motoInput, motoOutput } from '../mocks/motoMocks';

describe('Testando se é possível fazer um cadastro com sucesso ', function () {
  afterEach(Sinon.restore);
  it('Cadastrando um carro com sucesso', async function () {
    const carService = new CarService();
    Sinon.stub(Model, 'create').resolves(creatingCarResult);
    const result = await carService.createCar(creatingCarInput);
    expect(result).to.be.deep.equal(creatingCarResult);
  });

  it('Cadastrando uma moto com sucesso', async function () {
    const motoService = new MotoService();
    Sinon.stub(Model, 'create').resolves(motoOutput);
    const result = await motoService.createMoto(motoInput);
    expect(result).to.be.deep.equal(motoOutput);
  });
});
