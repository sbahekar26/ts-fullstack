/* 
Exercise 6 — the braid (stretch).
Start with this array:

javascriptconst orders = [
  { item: "Coffee", price: 5, paid: true },
  { item: "Sandwich", price: 12, paid: false },
  { item: "Cake", price: 8, paid: true },
  { item: "Juice", price: 6, paid: false },
];

In steps (write one, run it, then add the next):


filter to get only the unpaid orders.
From those, map to get just their prices.
reduce that list of prices into a total owed.
Log the final number.
Should print: the total of the unpaid orders → 18.
*/

const orders = [
  { item: "Coffee", price: 5, paid: true },
  { item: "Sandwich", price: 12, paid: false },
  { item: "Cake", price: 8, paid: true },
  { item: "Juice", price: 6, paid: false },
];

const sectionOff = orders.filter((p) => p.paid === false);
console.log(sectionOff);

const newPrice = sectionOff.map((nP) => nP.price);
console.log(newPrice);

const newTotal = newPrice.reduce((sum ,nT) => sum + nT, 0);
console.log(newTotal);