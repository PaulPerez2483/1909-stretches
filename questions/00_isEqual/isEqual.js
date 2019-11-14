function isEqual(obj1, obj2) {
  // write your function here
  // run your tests by running `jest isEqual`
  // you can also run tests on every save by running
  // `jest --watch isEqual`
<<<<<<< HEAD
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
=======
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (const key in obj1) {
    if (!obj2[key] || obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
>>>>>>> 8432be207daf1864355556d3004c3cd3723c3882
}

module.exports = { isEqual };
