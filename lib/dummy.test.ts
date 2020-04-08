import { equal } from "https://deno.land/std/testing/asserts.ts";

Deno.test(function itShouldValidateDummyExpectation() {
  equal("deno", "deno");
});

Deno.test("it should validate a dummy expectation", () => {
  equal("deno", "deno");
});

Deno.test({
  name: "it should validate a dummy expectation",
  fn: () => {
    equal("deno", "deno");
  },
});
