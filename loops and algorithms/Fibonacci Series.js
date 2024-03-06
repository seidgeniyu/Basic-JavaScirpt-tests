function generateFibonacciSeries(num) {
  if (num <= 1) {
    return [num];
  }

  // Initialize the first two elements
  const fibonacciSeries = [0, 1];

  // Generate the remaining elements using a loop
  for (let i = 2; i < num; i++) {
    const nextElement = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    fibonacciSeries.push(nextElement);
  }

  return fibonacciSeries;
}
