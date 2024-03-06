function calculateFactorial(n) {
  //handlong negative numbers and 0
  if (n < 0) {
    return -1; //throw an error
  } else if (n === 0) {
    return 1;
  }

  //Initializing a fact variable
  let fact = 1;

  //looping from 2 to n and multiplying the result
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }
  return fact;
}
console.log(calculateFactorial(7));
