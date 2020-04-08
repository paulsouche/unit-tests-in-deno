function fibonacciMemo(
  n: number,
  memo: Record<any, number | undefined>,
): number {
  const m = memo[n];
  if (m) {
    return m;
  }
  return memo[n] = (n <= 1)
    ? 1
    : fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
}

function safeFibonacci(n: number): number {
  if (n < 0 || Math.trunc(n) !== n) {
    throw new Error("n must be an integer greater or equal to 0");
  }

  return fibonacciMemo(n, {});
}

export default safeFibonacci;
