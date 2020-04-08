function fibonacci(n) {
  if (n < 0 || Math.trunc(n) !== n) {
    throw new Error("n must be an integer greater or equal to 0");
  }

  var a = 1, b = 0, temp;

  while (n >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }

  return b;
}

function fibonacciRec(n) {
  if (n < 0 || Math.trunc(n) !== n) {
    throw new Error("n must be an integer greater or equal to 0");
  }

  function fibo(n) {
    return (n <= 1) ? 1 : fibo(n - 1) + fibo(n - 2);
  }

  return fibo(n);
}

function fibonacciMemo(n) {
  if (n < 0 || Math.trunc(n) !== n) {
    throw new Error("n must be an integer greater or equal to 0");
  }

  function fibo(n, memo) {
    if (memo[n]) {
      return memo[n];
    }
    return memo[n] = (n <= 1) ? 1 : fibo(n - 1, memo) + fibo(n - 2, memo);
  }

  return fibo(n, {});
}

function fibonacciGold(n) {
  if (n < 0 || Math.trunc(n) !== n) {
    throw new Error("n must be an integer greater or equal to 0");
  }

  const sqrt5 = Math.sqrt(5);
  const phi = (1 + sqrt5) / 2;
  const phi_ = (1 - sqrt5) / 2;

  return Math.round(
    1 / sqrt5 * Math.pow(phi, n + 1) - 1 / sqrt5 * Math.pow(phi_, n + 1),
  );
}

console.time("fibonacci bench");
for (let i = 0; i < 35; i++) {
  fibonacci(i);
}
console.timeEnd("fibonacci bench");

console.time("fibonacci rec bench");
for (let i = 0; i < 35; i++) {
  fibonacciRec(i);
}
console.timeEnd("fibonacci rec bench");

console.time("fibonacci memo bench");
for (let i = 0; i < 5000; i++) {
  fibonacciMemo(i);
}
console.timeEnd("fibonacci memo bench");

console.time("fibonacci gold bench");
for (let i = 0; i < 100000; i++) {
  fibonacciGold(i);
}
console.timeEnd("fibonacci gold bench");

console.time("fibonacci bench comparison");
for (let i = 0; i < 100000; i++) {
  fibonacci(i);
}
console.timeEnd("fibonacci bench comparison");