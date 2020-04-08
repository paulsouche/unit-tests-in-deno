function fibonacci(n: number) {
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

export default fibonacci;
