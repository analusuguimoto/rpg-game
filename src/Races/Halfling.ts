import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints = 60;
  private static _instanceCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._instanceCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return this._instanceCounter;
  }
}

export default Halfling;