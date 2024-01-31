import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static _instanceCounter = 0;
  private _energyDamage: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Mage._instanceCounter += 1;
  }

  static createdArchetypeInstances(): number {
    return this._instanceCounter;
  }

  get energyType() {
    return this._energyDamage;
  }
}

export default Mage;