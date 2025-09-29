import { describe, it, expect } from 'vitest';
import { transliterate } from './transliteration.js';

describe('Transliteration', () => {
  it('transliterates the pangram', () => {
    const str = 'Съешь ещё этих мягких французских булок, да выпей же чаю.';
    const result = transliterate(str);

    expect(result).toBe('Sieesh eshche etikh miagkikh frantsuzskikh bulok, da vypei zhe chaiu.');
  });

  it('transliterates another pangram', () => {
    const str = 'Однажды съев фейхоа, я, как зацикленный, ностальгирую всё чаще и больше по этому чуду.';
    const result = transliterate(str);

    expect(result).toBe('Odnazhdy sieev feikhoa, ia, kak zatsiklennyi, nostalgiruiu vse chashche i bolshe po etomu chudu.');
  });
});