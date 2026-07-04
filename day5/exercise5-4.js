/*
Exercise 4 — filter on objects.
Using movies, use filter to keep only movies released after the year 2000. Log the result.
Should print: an array of the movie objects that pass (however many that is).
*/

const movie = [
    { title : "Train your dragon" , year : 2025 },
    { title : "Avatar" , year : 2018},
    { title : "waterways" , year : 1998},
];

const years = movie.filter((f) => f.year > 2000);
console.log(years);