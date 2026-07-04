/*
Exercise 3 — Your own closure.
Write a makeMultiplier(factor) function that returns a new function. 
The returned function takes a number and multiplies it by factor. 
Create const triple = makeMultiplier(3) and const double = makeMultiplier(2), 
then call each a couple times.
Should print: triple(5) → 15, double(5) → 10. 
In a comment, explain what each returned function is remembering.
*/

function makeMultiplier(factor) {
    return(n) => n * factor
}

const triple = makeMultiplier(3); //remebers the factor = 3 & function makes it thrice of n given in const triple 5 in this case and passes it down to triple
const double = makeMultiplier(2);

console.log(triple(5));
console.log(double(5));