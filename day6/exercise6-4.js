/*
Exercise 4 — A counter.
Rebuild the makeCounter example from memory (don't look at Section 2). 
Create two independent counters and call them alternately to prove they each keep their own count.
Should print: something like 1, 1, 2, 2, 3 as you interleave calls 
— showing the two counts are separate.
*/


function makeCounter() {
        let count = 0;
        return () => {
            count = count + 1;
            return count;
        };
    }
 
const counterA = makeCounter();
const counterB = makeCounter();

console.log(counterA());    //1 of A
console.log(counterB());    //1 of B
console.log(counterA());    //2 of B
console.log(counterB());    //2 of B
console.log(counterA());    //3 of A