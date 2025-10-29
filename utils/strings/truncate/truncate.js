/**
 * Обрезает строку до заданной длины и добавляет многоточие.
 * @param {string} str Входящая строка
 * @param {number} maxLength Максимальная длина строки
 * @param {string} ellipsis Строка или символ, добавляемый в конец строки
 * @returns {string}
 */

function truncate(str, maxLength, ellipsis='...') {
  if (typeof str !== 'string' || str.length <= maxLength) {
    return str;
  }

  return str.slice(0, maxLength - ellipsis.length) + ellipsis;
}

export { truncate };