import { expect, test } from "bun:test";

import { expect as myExpect } from "./index.ts";
test("expect(5).toBe(5); // true", () => {
  expect(myExpect(5).toBe(5)).toBe(true);
});
test("expect(5).notToBe(5) // throws 'Equal'", () => {
  expect(() => myExpect(5).notToBe(5)).toThrowError();
});