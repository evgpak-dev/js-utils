import { describe, it, expect } from "vitest";
import { isColorLight } from "./isColorLight.js";

describe("Determine if a color is light or dark", () => {
  it("tests white color", () => {
    const result = isColorLight("#FFFFFF");

    expect(result).toBe(true);
  });

  it("tests black color", () => {
    const result = isColorLight("#000000");

    expect(result).toBe(false);
  });

  it('tests pure green color', () => {
    const result = isColorLight("#0F0");

    expect(result).toBe(true);
  });
});
