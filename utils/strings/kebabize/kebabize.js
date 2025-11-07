/**
 * Преобразует строку camelCase в kebab-case и удаляет числовые символы.
 *
 * @param {string} str Входящая camelCase-строка
 * @return {string} Строка в kebab-стиле
 */

function kebabize(str) {
  const withoutNumbers = str.replace(/[0-9]/g, '');

  return withoutNumbers.replace(/[A-ZА-Я]/g, (match, offset) => {
    let prefix = (offset > 0) ? '-' : '';

    return prefix + match.toLowerCase();
  });
}

export { kebabize };