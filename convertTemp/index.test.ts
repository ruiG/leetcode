import { expect, test } from "bun:test";

import { convertTemperature  } from "./index.ts";
test("celsius = 36.50", () => {
  expect(convertTemperature(36.50)).toEqual([309.65000,97.70000]);
});
test("celsius = 122.11", () => {
  expect(convertTemperature(122.11)).toEqual([395.26000,251.79800]);
});