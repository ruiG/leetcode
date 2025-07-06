import { describe, expect, test } from "bun:test";

import { FindSumPairs } from "./index.ts";

describe("Pairs of Sum: [1, 1, 2, 2, 2, 3], [1, 4, 5, 2, 5, 4]", () => {
  const findSumPairs = new FindSumPairs([1, 1, 2, 2, 2, 3], [1, 4, 5, 2, 5, 4]);

  test("pairs (2,2), (3,2), (4,2), (2,4), (3,4), (4,4) make 2 + 5 and pairs (5,1), (5,5) make 3 + 4", () => {
    expect(findSumPairs.count(7)).toBe(8); // return 8;
  });
  test("now nums2 = [1,4,5,4,5,4]", () => {
    findSumPairs.add(3, 2); // now nums2 = [1,4,5,4,5,4]
    expect(findSumPairs.count(8)).toBe(2); // return 2; pairs (5,2), (5,4) make 3 + 5
    expect(findSumPairs.count(4)).toBe(1); // return 1; pair (5,0) makes 3 + 1
  });
});
