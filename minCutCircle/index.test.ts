import { expect, test } from "bun:test";

import { numberOfCuts } from "./index.ts";
test("4", () => {
  expect(numberOfCuts(4)).toBe(2);
});
test("3", () => {
  expect(numberOfCuts(3)).toBe(3);
});