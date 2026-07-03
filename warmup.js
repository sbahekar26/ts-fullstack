const nums = [4, 8, 15, 16, 23, 42];
const even = nums.filter((n) => n % 2 === 0);
console.log("Even numbers:", even);

const nums1 = [4, 8, 15, 16, 23, 42];
const total = nums1.reduce((sum, n) => sum + n, 0);
console.log("Total:", total);

