/*
Exercise 3 — map.
Using your movies array, use map to build an array of just the titles. Log it.
Should print: an array of your three title strings.
*/

const movie = [
    { title : "Train your dragon" , year : 2025 },
    { title : "Avatar" , year : 2018},
    { title : "waterways" , year : 1998},
];

const titles = movie.map((m) => m.title);
console.log(titles);