/*
largestDivisible returns the largest number from a list of numbers where that number is divisible by a passed in number
write the largestDivisible function

*/

function largestDivisible(arr, num) {
<<<<<<< HEAD

    if(arr.length <= 0 || num === 0) {
        return null;
    }
    let x =  arr.filter(el => {
        if(el % 3 === 0) {
            return el;
        }
    })
    
    if(x.length > 0) {
        console.log(x)
        return Math.max(...x)
    }

return null

}

=======
  let largestSoFar = -Number('Infinity');
  for (let val of arr) {
    if (val % num === 0) {
      largestSoFar = Math.max(val, largestSoFar);
    }
  }
  if (largestSoFar === -Number('Infinity ')) {
    return null;
  }
  return largestSoFar;
}
>>>>>>> 8432be207daf1864355556d3004c3cd3723c3882

// console.log(largestDivisible([1, 2, 3, 4, 5, 6, 7], 3));//6
// console.log(largestDivisible([1], 2));//null

module.exports = { largestDivisible };
