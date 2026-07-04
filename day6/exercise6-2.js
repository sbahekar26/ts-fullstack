/*
Exercise 2 — Inner sees out.
Declare a const city = "Toronto" at the top level. 
Write a function that logs city from inside it (without receiving it as a parameter). 
Predict whether it works, then run. 
In a comment, explain why it works using the one-way-mirror idea.
*/

const city = "Toronto";

function newCity(){
    console.log(city);
}

newCity();