import { describe, it, expect } from 'vitest';
import { titleCase } from './titleCase.ts';

describe('Title case an input string', () => {
  it('a basic string', () => {
    const str = 'a tale of two cities';
    const result = titleCase(str);

    expect(result).toBe('A Tale Of Two Cities');
  });

  it('a string in French', () => {
    const str = 'françois hollande';
    const result = titleCase(str);

    expect(result).toBe('François Hollande');
  });

  it('a string in Russian', () => {
    const str = 'привет мир!';
    const result = titleCase(str);

    expect(result).toBe('Привет Мир!');
  });

  it('a string with multiple spaces and punctuation', () => {
    const str = '  what\'s up?  it\'s a beautiful-day!  ';
    const result = titleCase(str);

    expect(result).toBe('  What\'s Up?  It\'s A Beautiful-Day!  ');
  });
});