import { describe, it, expect } from "vitest";
import { truncate } from "./truncate.js";

describe('Truncate a string', () => {
  it('should truncate a string', () => {
    const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    const result = truncate(str, 30);

    expect(result).toBe('Lorem ipsum dolor sit amet,...');
  });

  it('should truncate another string', () => {
    const str = 'Съешь ещё этих мягких французских булок, да выпей же чаю.';
    const result = truncate(str, 35, '→');

    expect(result).toBe('Съешь ещё этих мягких французских →');
  });
});