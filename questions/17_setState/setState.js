// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
  constructor(initialState = {}) {
    this.state = initialState;
  }


  setState(x) {
    this.state = { ...this.state, ...x }
    return this.state;
  }
}
module.exports = { StatefulThing };
