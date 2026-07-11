function riskyTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("boom — something failed");  
    }, 500);
  });
}

async function run() {
  try {
    const result = await riskyTask();
    console.log(result);            
  } catch (error) {
    console.log("Caught the error:", error);   
  }
  console.log("Program keeps going");  
}

run();