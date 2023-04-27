import Moto from '../Domains/Motorcycle';
import IMotoCycle from '../Interfaces/IMotocycle';
import MotosODM from '../Models/MotoCyclesODM';

class MotoService {
  private createCarDomain(moto: IMotoCycle | null): Moto | null {
    if (moto) return new Moto(moto);
    return null;
  }

  public async createMoto(moto: IMotoCycle) {
    const motoODM = new MotosODM();
    const newMoto = await motoODM.create(moto);
    return this.createCarDomain(newMoto);
  }

  public async getAllMotos() {
    const motosODM = new MotosODM();
    const allMotos = await motosODM.find();
    const result = allMotos.map((moto: IMotoCycle) => this.createCarDomain(moto));
    return result;
  }

  public async getMotoByID(id: string) {
    const motosODM = new MotosODM();
    const moto = await motosODM.findOne(id);
    return this.createCarDomain(moto);
  }

  public async updateByID(id: string, body: IMotoCycle) {
    const motosODM = new MotosODM();  
    await motosODM.updateById(id, body);
    const moto = await motosODM.findOne(id);
    return this.createCarDomain(moto);
  }
}

export default MotoService;