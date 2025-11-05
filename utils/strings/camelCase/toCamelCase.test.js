import { describe, it, expect } from "vitest";
import { toCamelCase } from "./toCamelCase.js";

describe('Converts a string to camel case', () => {
  it('should convert a kebab-case string', () => {
    const result = toCamelCase('lorem ipsum dolor sit amet');

    expect(result).toBe('loremIpsumDolorSitAmet');
  });

  it('should convert a underscore string', () => {
    const result = toCamelCase('hello_world');

    expect(result).toBe('helloWorld');
  });

  it('should convert a space-separated string', () => {
    const result = toCamelCase('Foo Bar');

    expect(result).toBe('fooBar');
  });
});