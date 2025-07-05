import { expect, test } from "bun:test";

import { removeTrailingZeros } from "./index.ts";
test('"51230100"', () => {
  const str = "51230100";
  expect(removeTrailingZeros(str)).toBe("512301");
});

test('"123"', () => {
  const str = "123";
  expect(removeTrailingZeros(str)).toBe("123");
});