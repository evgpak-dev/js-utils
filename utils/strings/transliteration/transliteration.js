function transliterate(str) {
  const map = {
    'а': 'a',
    'б': 'b',
    'в': 'v',
    'г': 'g',
    'д': 'd',
    'е': 'e',
    'ё': 'e',
    'ж': 'zh',
    'з': 'z',
    'и': 'i',
    'й': 'i',
    'к': 'k',
    'л': 'l',
    'м': 'm',
    'н': 'n',
    'о': 'o',
    'п': 'p',
    'р': 'r',
    'с': 's',
    'т': 't',
    'у': 'u',
    'ф': 'f',
    'х': 'kh',
    'ц': 'ts',
    'ч': 'ch',
    'ш': 'sh',
    'щ': 'shch',
    'ъ': 'ie',
    'ы': 'y',
    'ь': "",
    'э': 'e',
    'ю': 'iu',
    'я': 'ia'
  }

  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const lowerChar = char.toLowerCase();

    if (map.hasOwnProperty(lowerChar)) {
      let traslitChar = map[lowerChar];

      if (char === char.toUpperCase()) {
        traslitChar = traslitChar.toUpperCase();
      }

      result += traslitChar;
    } else {
      result += char;
    }
  }

  return result;
}

export { transliterate };