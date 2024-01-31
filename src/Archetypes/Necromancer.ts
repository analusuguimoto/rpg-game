import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static _instanceCounter = 0;
  private _energyDamage:EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Necromancer._instanceCounter += 1;
  }

  static createdArchetypeInstances(): number {
    return this._instanceCounter;
  }

  get energyType() {
    return this._energyDamage;
  }
}

export default Necromancer;