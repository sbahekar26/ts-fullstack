/*
Exercise 5 — find.
Using movies, use find to get the first movie released before 1990 
(add one that qualifies if you need to). 
Log it. 
Then use find to search for a year that doesn't exist in your list, and log that result too 
— notice what you get back.
Should print: the matching movie object, then undefined.
*/

const movie = [
    { title : "Train your dragon" , year : 2025 },
    { title : "Avatar" , year : 2018},
    { title : "waterways" , year : 1998},
    {title : "Titanic" , year : 1850},
];


const look = movie.find((l) => l.year < 1990);
console.log(look);

const trial = movie.find((t) => t.year === 2000);
console.log(trial);