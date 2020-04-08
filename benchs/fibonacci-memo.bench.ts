import { bench, runBenchmarks } from "https://deno.land/std/testing/bench.ts";
import fibonacciMemo from "../lib/fibonacci/fibonacci-memo.ts";
import fibonacci from "../lib/fibonacci/fibonacci.ts";

bench(function fibonacciBench(b) {
  b.start();
  for (let i = 0; i < 10000; i++) {
    fibonacci(i);
  }
  b.stop();
});

bench(function fibonacciMemoBench(b) {
  b.start();
  for (let i = 0; i < 10000; i++) {
    fibonacciMemo(i);
  }
  b.stop();
});

bench({
  name: "fibonacci bench 10 times",
  runs: 10,
  func: (b) => {
    b.start();
    for (let i = 0; i < 5000; i++) {
      fibonacci(i);
    }
    b.stop();
  },
});

bench({
  name: "fibonacci-memo bench 10 times",
  runs: 10,
  func: (b) => {
    b.start();
    for (let i = 0; i < 5000; i++) {
      fibonacciMemo(i);
    }
    b.stop();
  },
});

runBenchmarks();
