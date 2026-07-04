/*
R1 — Types & typeof.
Declare a variable of each: a string, a number, a boolean, something undefined, and something null.
Log the typeof each. 
*/
const name = "Sid";
const age = 27;
const isLive = false;
let check;
const value = null;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isLive);
console.log(typeof check);
console.log(typeof value);

/*
R2 — const vs let.
Write code where you need let (a value that changes) and code where const is correct. 
Then deliberately try to reassign a const and read the error. 
In a comment: one sentence on when you reach for each.
*/
let a = 5;
a = 20;
console.log(a);

const check1 = 1234;
console.log(check1);
//check1 = 5678;
//console.log(check1);


/*
R3 — Function + return discipline.
Write getDiscountedPrice(price, percentOff) that returns the price after the discount. 
E.g. getDiscountedPrice(100, 20) → 80.
Watch for: return the result — don't console.log inside the function.
*/
function getDiscountedPrice(price, percentOff){
    price = price - (price * percentOff/100);
    return price;
}

console.log(getDiscountedPrice(50,10));


/*
R4 — Arrow + boolean collapse.
Write a one-line arrow function isEven(n) (implicit return). 
Then write isOdd(n) — but instead of new logic, think about how odd relates to even.
Should print: isEven(4) → true, isOdd(4) → false.
*/
const isEven = (n) => n % 2 === 0;
const isOdd = (n) => !isEven(n);
console.log(isEven(4)); //even - true
console.log(isOdd(5));  //odd - true


/*
R5 — Array of objects, reaching in.
Build an array books of 3 objects, each with title, author, and pages. 
Log the author of the first book and the pages of the last book (use length - 1 for "last", 
not a hardcoded index).
*/
const books = [
    { title : "Math Fundamentals", author: "RD Sharma", pages: 350},
    { title : "C++ Programming", author: "Peter", pages: 2000},
    {title : "Harry Potter", author: "Brown", pages: 1500},
]

console.log(books[0].author);
console.log(books[books.length - 1].pages);

/*
R6 — map.
From books, produce an array of just the titles. 
Then produce an array of strings like "<title> by <author>" (template literals + map together).
Should print: a list of titles, then a list of "X by Y" strings.
*/

const titleByAuthor = books.map(t => `${t.title} by ${t.author}`);
console.log(titleByAuthor);

/*
R7 — filter.
From books, keep only the books longer than 200 pages. Predict which survive before running.
Should print: the matching book objects.
*/
const lengthybooks = books.filter(f => f.pages >= 500);
console.log(lengthybooks);

/*
R8 — find + the undefined trap.
From books, find the first book by a specific author. 
Then find a book by an author who isn't in the list, and log the result. 
What comes back for the miss?
Should print: the found book, then undefined.
In a comment: why is checking for that undefined important before using the result?
*/
const specific = books.find((s) => s.author === "Peter");
console.log(specific);

const findFail = books.find((s) => s.author === "Nobody");
console.log(findFail);

/*
R9 — The full pipeline (new data).
Compute the total cost of the whole cart (each line is price × qty, then sum them all). 
Build it in steps: map each line to its line-total, then reduce to the grand total. Run after each step.
Should print: 15*2 + 3*5 + 40*1 = 85.
This braids: map (with a calculation inside) → reduce. 
The map isn't just pulling a field this time — it's computing one.
*/
const cart = [
  { item: "Book", price: 15, qty: 2 },
  { item: "Pen", price: 3, qty: 5 },
  { item: "Lamp", price: 40, qty: 1 },
];

const totolCart = cart.map(tC => tC.price * tC.qty);
console.log(totolCart);

const grandTotal = totolCart.reduce((sum, n) => sum + n, 0);
console.log(grandTotal);


/*
R10 — Scope prediction.
Predict (in a comment) which line errors, then run:
Fix nothing — just explain, in a comment, why one line works and one fails.
*/
function box() {
  const treasure = "gold";
  return treasure;
}
console.log(box());
//console.log(treasure); this line errors because it s handing the value to box() and lives only inside function

/*
R11 — Closure, fresh shape.
Write makePassword(secret) that returns a function taking a guess. 
If the guess matches the remembered secret, return "unlocked", else "denied". 
Make two with different secrets; prove each remembers its own.
Should print: correct guess → unlocked, wrong guess → denied.
*/
function makePassword(secret){
    const passCheck = (c) => {
        if (c === secret){
            return "unlocked";
        } else {
            return "denied";
        }
    };
    return passCheck;
}

const gate1 = makePassword("dragon");
const gate2 = makePassword("phone")

console.log(gate1("dragon"));   // predict - unlocked
console.log(gate1("wrong"));    // predict - denied
console.log(gate2("phone"));  // predict - unlocked
console.log(gate2("dragon"));   // predict - denied

/*
R12 — Closure with changing state.
Write makeScoreKeeper() returning an object with addPoints(n) and getScore(). 
Score starts at 0, is private (closure, not a property). 
Prove keeper.score is undefined but getScore() works.
Should print: after adding some points, the total; then undefined for the direct property.
*/
function makeScoreKeeper() {
    let score = 0;
    return{
        addPoints(n) {
            score = score + n;
        },
        getScore(){
            return score;
        },
    };
}

const keeper = makeScoreKeeper();
keeper.addPoints(10);
keeper.addPoints(5);
console.log(keeper.getScore());
console.log(keeper.score);

/*
R13 — this.
Object car with brand and a describe() method logging "This is a <brand>" via this.brand. Call it.
In a comment: what is this here, and how do you know?
*/
const car = {
    brand : "Toyota",
    describe() {
        console.log(`This is a car brand named ${this.brand}`);
    },
};

car.describe();

/*
M1.
You have const temps = [72, 68, 90, 85, 61];. Report how many of them are above 70.
(Think: which method gives you a smaller list, and how do you count a list?)
Should print: 3.
*/
const temps = [72, 68, 90, 85, 61];
const gtCheck = temps.filter((gT) => gT > 70).length;
console.log(gtCheck);

/*
M2.
Build something that generates ID numbers: 
each time you call it, it returns the next integer — 1, then 2, then 3... 
And a second independent generator that does the same starting fresh. Prove they don't interfere.
Should print: interleaved calls showing two separate sequences.
Get the names of just the students who passed (grade ≥ 70), as an array of strings.
Should print: ["Ana", "Bo", "Cy"].
Think: two operations chained — which order? What shape after each?
*/
function makeIdGenerator(){
    let increase = 0;
    return () => {
        increase = increase + 1;
        return increase;
    };
}

const genA = makeIdGenerator();
const genB = makeIdGenerator();
console.log(genA());
console.log(genB());
console.log(genA());

/*
M3.
Get the names of just the students who passed (grade ≥ 70), as an array of strings.
Should print: ["Ana", "Bo", "Cy"].
Think: two operations chained — which order? What shape after each?
*/
const students = [
  { name: "Ana", grade: 88 },
  { name: "Bo", grade: 72 },
  { name: "Cy", grade: 95 },
  { name: "Di", grade: 64 },
];

const topper = students.filter((t) => t.grade >= 70 ).map((s) => s.name);
console.log(topper);

/*
M4.
Make a "bank" object with a balance starting at 100 and a withdraw(amount) method.
Withdrawing should reduce the balance and return the new balance — 
BUT if amount is more than the balance, it should return "insufficient funds" and 
not change the balance.
Should print: a valid withdrawal shows the reduced balance;
an over-withdrawal shows the error and leaves balance intact.
This braids: objects, methods, this, and a condition.
*/
const bank = {
    balance: 100,
    withdraw(amount){
        if (this.balance <= amount){
            return  "Insufficient funds";
        } else {
            this.balance = this.balance - amount;
            console.log(`balance decucted ${this.balance}`)
            return this.balance;
        }
    },
};

console.log(bank.withdraw(30));
console.log(bank.withdraw(120));
console.log(bank.balance);