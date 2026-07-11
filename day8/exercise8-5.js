function getNumber() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(42), 500);
  });
}

async function run() {
  const number = await getNumber();
  console.log("the number is " + number);

  
  const raw = getNumber();   // no await
  console.log("without await:", raw);
}

run();