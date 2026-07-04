nums = [4, 8, 15, 16, 23, 42];

function sumOf(list){
    const total = list.reduce((sum, n) => sum + n, 0);
    return total;
}

console.log(sumOf(nums));

const isBig = (n) => n > 20;

const bigNums = nums.filter(isBig);
console.log(bigNums);

console.log(sumOf(bigNums));