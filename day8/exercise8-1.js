// Prediction: "First" prints, then "Third", then "Second" last.
// Even though "Second" is written in the middle, its setTimeout sets it
// aside to run later, so JavaScript moves on and prints "Third" first.

console.log("First");

setTimeout(() => {
  console.log("Second");
}, 1000);

console.log("Third");