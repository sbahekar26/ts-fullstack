import {add} from "./math.js"
console.log(add(2, 3));

import { shout , repeat } from "./string.js"
console.log(shout("hi"));
console.log(repeat("ab", 3));

import coinCheck from "./coinflip.js"
console.log(coinCheck());
console.log(coinCheck());
console.log(coinCheck());

import { isEven, isOdd } from "./numbers.js";
const nums = [1, 2, 3, 4, 5, 6];
const evens = nums.filter(isEven);
console.log(evens);