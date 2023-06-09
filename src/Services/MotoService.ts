import Motorcycle from '../Domains/Motorcycle';
import IMotoCycle from '../Interfaces/IMotorcycle';
import MotosODM from '../Models/MotoCyclesODM';

class MotoService {
  private createMotoDomain(moto: IMotoCycle | null): Motorcycle | null {
    if (moto) return new Motorcycle(moto);
    return null;
  }

  public async createMoto(moto: IMotoCycle) {
    const motoODM = new MotosODM();
    const newMoto = await motoODM.create(moto);
    return this.createMotoDomain(newMoto);
  }

  public async getAllMotos() {
    const motosODM = new MotosODM();
    const allMotos = await motosODM.find();
    const result = allMotos.map((moto: IMotoCycle) => this.createMotoDomain(moto));
    return result;
  }

  public async getMotoByID(id: string) {
    const motosODM = new MotosODM();
    const moto = await motosODM.findOne(id);
    return this.createMotoDomain(moto);
  }

  public async updateByID(id: string, body: IMotoCycle) {
    const motosODM = new MotosODM();  
    await motosODM.updateById(id, body);
    const moto = await motosODM.findOne(id);
    return this.createMotoDomain(moto);
  }
}

export default MotoService;