import { describe, it, expect } from 'vitest';
import { removeEmoji } from './removeEmoji.js';

describe('Remove Emojis', () => {
  it('should remove emoji from string', () => {
      const str = 'The Quick Brown Fox Jumps Over the Lazy Dog 🐕';
      const result = removeEmoji(str);

      expect(result).toBe('The Quick Brown Fox Jumps Over the Lazy Dog ');
  });

  it('should remove multiple emojis from string', () => {
      const str = 'Coding is fun 🧑‍💻 and family time is great 👨‍👩‍👧‍👦! Pizza 🍕 too.';
      const result = removeEmoji(str);

      expect(result).toBe('Coding is fun and family time is great ! Pizza too.');
  });
});