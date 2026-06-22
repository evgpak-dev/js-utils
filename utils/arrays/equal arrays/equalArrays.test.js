import { describe, it, expect } from "vitest";
import { equalArrays } from "./equalArrays";

describe("Check if two arrays are equal", () => {
  it("should return true for identical array", () => {
    const arr = [1, 2, 3];
    expect(equalArrays(arr, arr)).toBe(true);
  });

  it("should return true for matching elements in the same order", () => {
    const arrA = ["apple", "banana", "orange"];
    const arrB = ["apple", "banana", "orange"];
    expect(equalArrays(arrA, arrB)).toBe(true);
  });

  it('should return false for arrays with different lengths', () => {
    expect(equalArrays([1, 2], [1, 2, 3])).toBe(false);
  });
});
