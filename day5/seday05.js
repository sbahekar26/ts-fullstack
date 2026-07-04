const products = [
  { name: "Keyboard", price: 80 },
  { name: "Mouse", price: 25 },
  { name: "Monitor", price: 300 },
];

// 1. Just the names:
const names = products.map((p) => p.name);
console.log(names);

// 2. Only the affordable ones (under 100):
const affordable = products.filter((p) => p.price < 100);
console.log(affordable);

// 3. The first product over 200:
const pricey = products.find((p) => p.price > 200);
console.log(pricey);

// 4. Total price of everything:
const total = products.reduce((sum, p) => sum + p.price, 0);
console.log(`Total: ${total}`);