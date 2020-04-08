import * as asserts from "https://deno.land/std/testing/asserts.ts";
import fibonacci from "./fibonacci-rec.ts";

Deno.test("it should validate fibonacci-rec input", () => {
  asserts.assertThrows(() => fibonacci(-1));
  asserts.assertThrows(() => fibonacci(0.5));
  asserts.assertThrows(() => fibonacci(NaN));
});

Deno.test("it should process fibonacci-rec numbers", () => {
  asserts.assertStrictEq(fibonacci(0), 1);
  asserts.assertStrictEq(fibonacci(1), 1);
  asserts.assertStrictEq(fibonacci(2), 2);
  asserts.assertStrictEq(fibonacci(3), 3);
  asserts.assertStrictEq(fibonacci(4), 5);
  asserts.assertStrictEq(fibonacci(5), 8);
});
