import { describe, it, expect, expectTypeOf } from "vitest";
import { encodeUnicodeCodepoint } from "./encodeUnicodeCodepoint.js";

describe('Encode Unicode code point', () => {
  it('should encode á (U+00E1) character', () => {
    const result = encodeUnicodeCodepoint(0x00E1);
    const arrayToCompare = new Uint8Array([195, 161]);

    expectTypeOf(result).toEqualTypeOf<Uint8Array>();
    expect(result).toEqual(arrayToCompare);
  });
});