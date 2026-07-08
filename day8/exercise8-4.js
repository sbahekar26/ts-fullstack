/*
A sequence.
Write an async function that: logs "Starting", 
awaits a 1-second delay, logs "Step 1 done", 
awaits another delay, 
logs "Step 2 done", logs "All finished". 
Predict the timing before running.
*/

function wait(ms, label) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(label), ms);
  });
}

async function run() {
  console.log("Starting");
  const first = await wait(1000, "Step 1 done");
  console.log(first);
  const second = await wait(500, "Step 2 done");
  console.log(second);
  console.log("All finished");
}

run();
