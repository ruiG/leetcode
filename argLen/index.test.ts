import { expect, test } from "bun:test";

import { argumentsLength } from "./index.ts";
test("argumentsLength(1, 2, 3); // 3", () => {
  expect(argumentsLength(1,2,3)).toBe(3);
});
test("argumentsLength(5); // 1", () => {
  expect(argumentsLength(5)).toBe(1);
});
test("argumentsLength({},null,'3']); // 3", () => {
  expect(argumentsLength({},null,'3')).toBe(3);
});
