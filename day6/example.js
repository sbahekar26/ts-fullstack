const account = {
  owner: "Sid",
  balance: 100,
  deposit(amount) {
    this.balance = this.balance + amount;
    return this.balance;
  },
};

console.log(account.deposit(50));  // 100
console.log(account.deposit(25));  // 175
console.log(account.balance);      // 175

function makeAdder(x) {
  return (y) => x + y;   // closure: remembers x
}
const add10 = makeAdder(10);
console.log(add10(5));   // 15
console.log(add10(100)); // 110