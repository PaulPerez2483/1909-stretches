const repeater = (func, n) => {
  // repeater runs a function n times and returns an array of its outputs
  let newArr = [];
  if (typeof func === 'function') {
    func()

  } else if (Array.isArray(func)) {
    for (let i = 0; i < n; i++) {
      newArr.push(func());
    };
  }


  console.log(newArr)

};

module.exports = { repeater };
