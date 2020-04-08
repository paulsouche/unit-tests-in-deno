import { bench, runBenchmarks } from "https://deno.land/std/testing/bench.ts";
import fibonacciGold from "../lib/fibonacci/fibonacci-gold.ts";
import fibonacci from "../lib/fibonacci/fibonacci.ts";

bench(function fibonacciBench(b) {
  b.start();
  for (let i = 0; i < 20000; i++) {
    fibonacci(i);
  }
  b.stop();
});

bench(function fibonacciGoldBench(b) {
  b.start();
  for (let i = 0; i < 20000; i++) {
    fibonacciGold(i);
  }
  b.stop();
});

bench({
  name: "fibonacci bench 10 times",
  runs: 10,
  func: (b) => {
    b.start();
    for (let i = 0; i < 20000; i++) {
      fibonacci(i);
    }
    b.stop();
  },
});

bench({
  name: "fibonacci-gold bench 10 times",
  runs: 10,
  func: (b) => {
    b.start();
    for (let i = 0; i < 20000; i++) {
      fibonacciGold(i);
    }
    b.stop();
  },
});

runBenchmarks();
