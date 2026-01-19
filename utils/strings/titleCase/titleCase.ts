/**
 * Uppercases the first letter of each word in a string.
 *
 * @param string The input string.
 * @returns The title-cased string.
 */

function titleCase(str: string): string {
  if (typeof str !== 'string' || !str) {
    return '';
  }

  const allowedChars = [
    "'", // single quote
  ];

  return str.replace(/(^|\P{L})(\p{L})/gu, (match, precedingChar, letter) => {
    if (allowedChars.includes(precedingChar)) {
      return `${precedingChar}${letter}`;
    }
    return `${precedingChar}${letter.toUpperCase()}`;
  });
}

export { titleCase };