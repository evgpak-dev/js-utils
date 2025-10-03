import { describe, it, expect } from 'vitest';
import { slugify } from './slugify.js';

describe('Slugify', () => {
  it('should slugify simple string', () => {
    const str = 'The Quick Brown Fox Jumps Over the Lazy Dog';
    const slug = slugify(str);

    expect(slug).toBe('the-quick-brown-fox-jumps-over-the-lazy-dog');
  });

  it('should slugify string with multiple spaces', () => {
    const str = '   Lorem ipsum   ';
    const slug = slugify(str);

    expect(slug).toBe('lorem-ipsum');
  });

  it('should slugify string with special characters', () => {
    const str = 'Hello, world! How\'s it going?';
    const slug = slugify(str);

    expect(slug).toBe('hello-world-how-s-it-going');
  });

  it('should slugify string with numbers', () => {
    const str = 'Product 123 Name';
    const slug = slugify(str);

    expect(slug).toBe('product-123-name');
  });

  it('should slugify string with accented characters', () => {
    const str = 'Crème brûlée et Poire à la Beaujolaise';
    const slug = slugify(str);

    expect(slug).toBe('creme-brulee-et-poire-a-la-beaujolaise');
  });

  it('should slugify string with hyphens and underscores', () => {
    const str = 'String with ---hyphens and _underscores_';
    const slug = slugify(str);

    expect(slug).toBe('string-with-hyphens-and-underscores');
  });
});