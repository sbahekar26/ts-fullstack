/*
Exercise 5 — this in a method.
Make an object dog with a name and a bark() method that logs "<name> says woof" using this.name. 
Call it. Then, in a comment, answer: what is this referring to inside bark?
*/


const dog = {
    name : "Katz",
    bark() {
        console.log(`${this.name} says woof`)
    },
};

dog.bark();