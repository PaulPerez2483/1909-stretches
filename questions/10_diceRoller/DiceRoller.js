// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  constructor(a,b) {
    if(!a || !b) {
      throw new Error('Error, missing')
    }
    this.a = a;
    this.b = b;
    this.history
  }
  roll(){
    const allRolls = []
  }

}


module.exports = { DiceRoller };
