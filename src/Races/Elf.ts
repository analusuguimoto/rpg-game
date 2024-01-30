import Race from './Race';

class Elf extends Race {
  private _maxLifePoints = 99;
  private static _instanceCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._instanceCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return this._instanceCounter;
  }
}

export default Elf;