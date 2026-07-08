/*
Your first promise consumer.
Write a function delay(ms) that returns a promise resolving after ms milliseconds 
(use the setTimeout + resolve pattern). 
Then use .then() to log "done waiting" after it resolves. 
Log "waiting..." right after calling it, and predict which prints first.
*/

const waiting = new Promise((awaiting) => {
    setTimeout(() =>{
        awaiting("awaiting finished");
     } ,1000);
});

waiting.then((answer) => {
    console.log(answer);
});

console.log("waiting.....");