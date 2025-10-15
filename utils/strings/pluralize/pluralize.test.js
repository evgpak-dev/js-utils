import { describe, it, expect } from 'vitest';
import { pluralize } from './pluralize.js';

describe('Pluralize a string', () => {
  it('should not pluralize a string', () => {
    const result = pluralize(1, ['яблоко', 'яблока', 'яблок']);

    expect(result).toBe('1 яблоко');
  });

  it('should pluralize a string', () => {
    const result = pluralize(2, ['яблоко', 'яблока', 'яблок']);

    expect(result).toBe('2 яблока');
  });

  it('should pluralize a string 2', () => {
    const result = pluralize(5, ['яблоко', 'яблока', 'яблок']);

    expect(result).toBe('5 яблок');
  });

  it('should pluralize a string 3', () => {
    const result = pluralize(101, ['яблоко', 'яблока', 'яблок']);

    expect(result).toBe('101 яблоко');
  });
});