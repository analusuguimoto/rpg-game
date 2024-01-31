import { EnergyType } from '../Energy';

abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;

  constructor(name: string) {
    this._name = name;
    this._cost = 0;
    this._special = 0;
  }

  static createdArchetypeInstances():number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;

  get name() {
    return this._name;
  }

  get special() {
    return this._special;
  }

  get cost() {
    return this._cost;
  }
}

export default Archetype;
// A classe Archetype deve ter um getter abstrato chamado energyType que retorna uma EnergyType:
// Esse tipo EnergyType corresponde ao tipo de energia que este arquétipo deve ter. (mana ou stamina)
// Cada arquétipo terá o seu tipo de energia, que será definido dentro de suas classes especializadas;
// A classe abstrata Archetype deve conter apenas a assinatura do método