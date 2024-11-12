function addPromise(a, b) {
  return new Promise( (resolve, reject) => {
    let sum = a + b;
    if (sum > 10) {
      resolve(sum);
    } else {
      reject("Sum not greater than 10");
    }
  } )
}

function subPromise(a, b) {
  return new Promise( (resolve, reject) => {
    let sub = a - b;
    if (sub > 0) {
      resolve("Positive Number");
    } else {
      reject("Negative number");
    }
  } )
}

function mulPromise(a, b) {
  return new Promise( (resolve, reject) => {
    let mul = a * b;
    if (mul > 10) {
      resolve(mul);
    } else {
      reject("Mul Not greater than 10");
    }
  } )
}

addPromise(1, 8);
subPromise(1, 8);
mulPromise(1, 8);


// addPromise(1, 8)
//   .then((value) => {
//   console.log("Success: ", value);
//   return subPromise(12, 15);
// })
// .then((message) => {
//   console.log("Success: ", message);
//   return mulPromise(1, 8);
// })
// .then((num) => {
//   console.log("Success: ", num);
// })
// .catch((error) => {
//   console.log("Failure: ", error);
// })

addPromise(10, 8)
  .then((value) => {
  console.log("Success: ", value);
})
  .catch((error) => {
  console.log("Failure: ", error);
})

subPromise(12, 5)
  .then((message) => {
  console.log("Success: ", message);
})
  .catch((error) => {
  console.log("Failure: ", error);
})

mulPromise(2, 8)
  .then((num) => {
  console.log("Success: ", num);
})
.catch((error) => {
  console.log("Failure: ", error);
})
