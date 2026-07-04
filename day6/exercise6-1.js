/*
Exercise 1 — Scope prediction.
Write a function with a const variable inside it. 
Try to console.log that variable from outside the function. 
Before running, write a comment predicting what happens.
Run it, confirm. 
Then fix it so you can see the value (hint: return it and log the call).
*/

function scope() {
    const name = "Sid";
    return name;
}
console.log(scope());