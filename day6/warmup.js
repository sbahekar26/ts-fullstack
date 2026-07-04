/*
rebuild this pipeline on an array of objects. Here's your data to start from:
javascriptconst products = [
  { name: "Keyboard", price: 80, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Monitor", price: 300, inStock: true },
  { name: "Cable", price: 10, inStock: false },
];
Your task, built in the three-step pipeline you now know:

filter → keep only the products that are in stock
map → from those, pull just the prices
reduce → add those prices into one total

Log the final number.
*/


const products = [
    { name : "keyboard", price: 80, inStock: true},
    { name: "Mouse", price: 25, inStock: false },
    { name: "Monitor", price: 300, inStock: true },
    { name: "Cable", price: 10, inStock: false },
];

const newStock = products.filter((nS) => nS.inStock === true);
console.log(newStock);

const newPrice = newStock.map((nP) => nP.price);
console.log(newPrice);

const newTotal = newPrice.reduce((sum, nT) => sum + nT, 0);
console.log(newTotal);



