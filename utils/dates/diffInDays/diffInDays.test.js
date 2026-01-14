import { describe, it, expect } from "vitest";
import { diffInDays } from "./diffInDays.js";

describe('The difference between dates', () => {
  it('should get the diff between two dates', () => {
    const date1 = new Date('2026-01-01');
    const date2 = new Date('2026-01-30');

    const result = diffInDays(date1, date2);

    expect(result).toBe(29);
  });
});