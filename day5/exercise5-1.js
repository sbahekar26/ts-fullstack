/*
Exercise 1 — Object basics.
Make an object book with keys title (string), pages (number), and read (boolean). 
Log the title using dot notation. Then change read to true and log the whole object.
*/


const book = {
    title : "keys",
    pages : 37,
    read : true,
};

console.log(book.title);

book.read = false;
console.log(book.read);
console.log(book);