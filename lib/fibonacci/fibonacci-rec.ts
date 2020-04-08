function fibonacci(n: number): number {
  return (n <= 1) ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

function safeFibonacci(n: number): number {
  if (n < 0 || Math.trunc(n) !== n) {
    throw new Error("n must be an integer greater or equal to 0");
  }

  return fibonacci(n);
}

export default safeFibonacci;
