import { expect, test } from "bun:test";

import { findLucky } from "./index.ts";
test("[2,2,3,4]", () => {

  const arr  = [2,2,3,4];
  expect(findLucky(arr)).toBe(2);
});

test("[1,2,2,3,3,3]", () => {

  const arr  = [1,2,2,3,3,3];
  expect(findLucky(arr)).toBe(3);
});

test("[2,2,2,3,3]", () => {

  const arr  = [2,2,2,3,3];
  expect(findLucky(arr)).toBe(-1);
});


[2,2,2,3,3]
