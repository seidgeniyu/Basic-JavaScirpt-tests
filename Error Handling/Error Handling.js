function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  } else {
    return a / b;
  }
}
//example usage
try {
  const result = divide(20, 4);
  console.log(result);
} catch (error) {
  console.error(error.message); //output:"division by zero is not allowed"
}
try {
  const result = divide(10, 0); //this will throw error
} catch (error) {
  console.error(error.message); //output:"division by zero is not allowed "
}
