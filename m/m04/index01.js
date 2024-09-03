let vb = false;
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      vb = true;  
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  vb = false;
  await vb;
  console.log(vb);
  // Expected output: "resolved"
}

asyncCall();

