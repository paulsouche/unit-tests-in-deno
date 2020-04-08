import * as asserts from "https://deno.land/std/testing/asserts.ts";

Deno.test("it should assert if a variable is truthy", () => {
  // And not just a boolean BTW
  asserts.assert(1);
  // Falsy fails
  // asserts.assert(NaN);
});

Deno.test("it should assert on a variable value", () => {
  asserts.assertStrContains("deno", "no");

  asserts.assertArrayContains(
    ["deno", "rust", "v8", "TypeScript"],
    ["rust", "TypeScript"],
  );

  asserts.assertMatch("hello deno", /deno/);
});

Deno.test("it should assert if two variables are equivalent", () => {
  asserts.assertEquals({}, {});
  // Oups ! These are equals...
  // asserts.assertNotEquals({}, []);
});

Deno.test("it should assert if two variables refers to the same value in memory", () => {
  const a = {};
  const b = a;
  asserts.assertStrictEq(a, b);
  // This fails
  // asserts.assertStrictEq(a, {});
});

Deno.test("it should assert if a function throws", () => {
  const throwingErrorFunc = () => {
    throw new Error("I am an Error");
  };

  const throwingAssertionErrorFunc = () => {
    throw new asserts.AssertionError("I am an AssertionError");
  };

  asserts.assertThrows(throwingErrorFunc);

  asserts.assertThrows(throwingErrorFunc, Error, "I am an Error");

  // This fails
  // asserts.assertThrows(func, asserts.AssertionError, "I am an Error");
  // asserts.assertThrows(throwingErrorFunc, Error, "I am an AssertionError");

  asserts.assertThrows(
    throwingAssertionErrorFunc,
    asserts.AssertionError,
    "I am an AssertionError",
  );

  // This fails
  // asserts.assertThrows(throwingAssertionErrorFunc, Error);
});

Deno.test("it should assert if a function throws asynchronously", () => {
  const throwingErrorAsyncFunc = () =>
    Promise.reject(new Error("I am an Error"));

  asserts.assertThrowsAsync(throwingErrorAsyncFunc, Error, "I am an Error");
});
