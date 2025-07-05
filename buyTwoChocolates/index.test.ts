import { expect, test } from "bun:test";

import { buyChoco } from "./index.ts";
test('"Input: prices = [1,2,2], money = 3"', () => {
  const prices = [1,2,2];
  const money = 3;

  expect(buyChoco(prices, money)).toBe(0);
});

test('"Input: prices = [3,2,3], money = 3"', () => {
  const prices = [3,2,3];
  const money = 3;

  expect(buyChoco(prices, money)).toBe(3);
});