import Race from './Race';

class Orc extends Race {
  private _maxLifePoints = 74;
  private static instanceCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.instanceCounter += 1;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return this.instanceCounter;
  }
}

export default Orc;