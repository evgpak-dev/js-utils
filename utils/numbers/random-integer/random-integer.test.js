import { describe, it, expect } from "vitest";
import { getRandomInt } from "./random-integer.js";

describe('Random Integer', () => {
  it('should generate random integer', () => {
    const result = getRandomInt(1, 10);

    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
  });
});