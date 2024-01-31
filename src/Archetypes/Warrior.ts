import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static _instanceCounter = 0;
  private energyDamage: EnergyType = 'stamina';

  constructor(name:string) {
    super(name);
    Warrior._instanceCounter += 1;
  }

  static createdArchetypeInstances(): number {
    return this._instanceCounter;
  }

  get energyType() {
    return this.energyDamage;
  }
}

export default Warrior;