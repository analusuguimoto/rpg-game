interface SimpleFighter {
  lifePoints:number;
  strength: number;

  attack(enemy: SimpleFighter): void
  receiveDamage(attackPoints: number): number
}

export default SimpleFighter;

// A interface deverá possuir os atributos:
// lifePoints, do tipo number;
// strength, do tipo number.