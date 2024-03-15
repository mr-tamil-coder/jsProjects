// Promsie state - Pending,fulfilled,rejected
const myPromise = new Promise((resolve, reject) => {
  const error = true;
  if (true) resolve("Hurray! no error");
  else reject("Rejeected the promsie");
});

console.log(myPromise);
myPromise
  .then((value) => "the value is " + value)
  .then((value) => console.log(value));
