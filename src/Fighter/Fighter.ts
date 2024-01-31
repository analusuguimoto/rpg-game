import Energy from '../Energy';

interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy

  attack(enemy: Fighter): void
  special?(enemy: Fighter): void
  levelUp():void
  receiveDamage(attackPoints: number):number
}

export default Fighter;

// A interface deverá possuir os atributos:
// lifePoints, do tipo number;
// strength, do tipo number;
// defense, do tipo number;
// energy, do tipo Energy. ✨✨