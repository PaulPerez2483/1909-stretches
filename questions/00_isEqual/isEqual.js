function isEqual(obj1, obj2) {
  // write your function here
  // run your tests by running `jest isEqual`
  // you can also run tests on every save by running
  // `jest --watch isEqual`
  // console.log(obj1, obj2)
    const one = Object.values(obj1);
    const two = Object.values(obj2);

    if(one.length !== two.length) {
      return false;
    }else {
      for(let i = 0; i < one.length; i++) {
        // console.log(one[i], two[i])
        if(one[i] === two[i]) {
          return true;
        }else {
          return false;
        }
      }
    }

return true
}

module.exports = { isEqual };
