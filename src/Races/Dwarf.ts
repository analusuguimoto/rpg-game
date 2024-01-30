import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static _instanceCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._instanceCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return this._instanceCounter;
  }
}

export default Dwarf;