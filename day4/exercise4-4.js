/*
Exercise 4 — Your first real function.
Write a function celsiusToFahrenheit(c) that returns the Fahrenheit value. 
(Formula: multiply by 9, divide by 5, add 32.) Call it with 0, 100, and 37.
Should print: 32, 212, 98.6.
*/

//using function
function celsiusToFahrenheit (c){
    const   fahrenhiet = c * 9/5 + 32;
    return fahrenhiet;
}

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(100));
console.log(celsiusToFahrenheit(37));


//using arrow =>
const celsiusToFahrenheitarrow = (c) => c * 9/5 + 32;

console.log(celsiusToFahrenheitarrow(0));
console.log(celsiusToFahrenheitarrow(100));
console.log(celsiusToFahrenheit(37));