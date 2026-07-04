/* 
Exercise 5 — Function + return discipline.
Write a function isAdult(age) that returns true if age is 18 or over, otherwise false. 
Call it with 15 and 21 and log the results. Make sure you return the answer 
— don't console.log inside the function.
Should print: false, then true.
*/

function isAdult(age) {
    return age >= 18;
}

console.log(isAdult(15));
console.log(isAdult(21));