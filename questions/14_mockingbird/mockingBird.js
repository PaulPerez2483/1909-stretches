const repeater = (func, n) => {
  // repeater runs a function n times and returns an array of its outputs
  let newArr = [];
  for (let i = 0; i < n; i++) {
    if (typeof func === 'function') {
      newArr.push(func());
    }
    else {
      newARr.push([]);
    }
  }
  console.log(newArr)
  return newArr;
};





module.exports = { repeater };
