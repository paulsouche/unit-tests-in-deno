import { bench, runBenchmarks } from "https://deno.land/std/testing/bench.ts";
import fibonacciRec from "../lib/fibonacci/fibonacci-rec.ts";
import fibonacci from "../lib/fibonacci/fibonacci.ts";

bench(function fibonacciBench(b) {
  b.start();
  for (let i = 0; i < 35; i++) {
    fibonacci(i);
  }
  b.stop();
});

bench(function fibonacciRecBench(b) {
  b.start();
  for (let i = 0; i < 35; i++) {
    fibonacciRec(i);
  }
  b.stop();
});

bench({
  name: "fibonacci bench 10 times",
  runs: 10,
  func: (b) => {
    b.start();
    for (let i = 0; i < 35; i++) {
      fibonacci(i);
    }
    b.stop();
  },
});

bench({
  name: "fibonacci-rec bench 10 times",
  runs: 10,
  func: (b) => {
    b.start();
    for (let i = 0; i < 35; i++) {
      fibonacciRec(i);
    }
    b.stop();
  },
});

runBenchmarks();
