/*
Exercise 6 — Tie it to yesterday (the stretch).
Start with const nums = [4, 8, 15, 16, 23, 42];. 
Write a function sumOf(list) that takes an array and returns its total (use reduce inside). 
Then write a one-line arrow function isBig that returns whether a number is greater than 20. 
Use filter with isBig to get the big numbers, 
then pass that filtered array into sumOf and log the result.
Should print: the sum of just the numbers over 20 → 81.
*/

const nums = [4, 8, 15, 16, 23, 42];

function sumOf(list){
    const total = list.reduce((sum,n) => sum + n, 0)
    return total;
}

console.log(sumOf(nums));


const isBig = n => n > 20;

console.log(isBig(18));
console.log(isBig(24));


const bigNums = nums.filter(isBig);
console.log(bigNums);

console.log(sumOf(bigNums));