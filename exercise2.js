/* Exercise 2 — const vs let.
Create a let called balance starting at 100. Add 50 to it, then subtract 30, logging the balance after each change. 
Then try to do the same thing with const and observe the error you get. 
(Reading the error message is part of the exercise.)
Should print: 150, then 120, then an error on the const version. */

let balance = 100;
console.log(balance);
balance = balance + 50;
console.log(balance);
balance = balance - 30;
console.log(balance);


const balance = 100;
console.log(balance);
balance = balance + 50;
console.log(balance);