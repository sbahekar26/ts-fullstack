/*
Rewrite with async/await.
Take Exercise 2 and rewrite it using an async function with await instead of .then(). 
Same behavior, cleaner shape. 
Confirm the output matches.
*/
function delay(ms){
    return new Promise((resolve) => {
        setTimeout(() => resolve("done waiting..."), ms);
    });
}

async function run() {
    const answer = await delay(1000);
    console.log(answer);
}

run();
console.log("waiting...")