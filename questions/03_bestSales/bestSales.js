const sales = [
  {
    amount: 8,
    productId: 3,
  },
  {
    amount: 8,
    productId: 3,
  },
  {
    amount: 8,
    productId: 4,
  },
  {
    amount: 17,
    productId: 5,
  },
  {
    amount: 10,
    productId: 4,
  },
];
/*
productWhichMadeMostMoney returns an object with an id for that product and a total which totals all the amounts for that product.
*/

//write the productWhichMadeMostMoney function

function bestSales(sales) {
  let newObj = {};
  for(let key in sales) {
    // console.log(sales[key])
     let obj = sales[key];

      newObj.id = sales[key].productId;
      console.log(sales[key].amount)
      newObj.total += sales[key].amount;

  }
  console.log(newObj)
return newObj;
}

module.exports = { bestSales, sales };
