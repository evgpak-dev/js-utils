/**
 * Кодирует кодовую точку Unicode в последовательность байтов UTF-8 с помощью TextEncoder API.
 *
 * @param {number} codePoint - Кодовая точка Unicode.
 * @returns {Uint8Array} Типизированный массив байтов, представляющий последовательность UTF-8.
 */

function encodeUnicodeCodepoint(codePoint) {
  try {
    const character = String.fromCodePoint(codePoint);

    const encoder = new TextEncoder();

    return encoder.encode(character);
  } catch (error) {
    console.error('Invalid code point:', codePoint, error);
    return new Uint8Array();
  }
}

export { encodeUnicodeCodepoint };