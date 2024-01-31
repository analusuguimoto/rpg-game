import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static _instanceCounter = 0;
  private _energyDamage: EnergyType = 'stamina';
  
  constructor(name: string) {
    super(name);
    Ranger._instanceCounter += 1;
  }

  static createdArchetypeInstances():number { // override
    return this._instanceCounter;
  }

  get energyType(): EnergyType {
    return this._energyDamage;
  }
}

export default Ranger;