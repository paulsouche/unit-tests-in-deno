const sqrt5 = Math.sqrt(5);
const phi = (1 + sqrt5) / 2;
const phi_ = (1 - sqrt5) / 2;

function fibonacci(n: number) {
  if (n < 0 || Math.trunc(n) !== n) {
    throw new Error("n must be an integer greater or equal to 0");
  }

  // Excellent proof here https://youtu.be/J6tcnc7LukM?t=971 (french)
  return Math.round(
    1 / sqrt5 * Math.pow(phi, n + 1) - 1 / sqrt5 * Math.pow(phi_, n + 1),
  );
}

export default fibonacci;
