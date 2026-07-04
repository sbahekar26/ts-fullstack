/*
Exercise 6 — Tie it together (stretch).
Write a function makeBankAccount(startingBalance) that returns an object with two methods:
deposit(amount) and getBalance(). 
The balance should be kept private in a closure (a let inside makeBankAccount), 
NOT as a property on the returned object. 
Prove it works:
const acct = makeBankAccount(100);
acct.deposit(50);
console.log(acct.getBalance()); // 150
console.log(acct.balance);      // undefined — it's private!
This braids closures + objects + methods. 
In a comment, explain why acct.balance is undefined but getBalance() still knows the real number.
*/

function makeBankAccount(startingBalance){
    let balance = startingBalance;
    return{
        deposit(amount){
            balance = balance + amount;
        },
        getBalance(){
            return balance;
        },
    };
}


const acct = makeBankAccount(100);
console.log(acct.getBalance());

acct.deposit(50);
console.log(acct.getBalance());

console.log(acct.balance);