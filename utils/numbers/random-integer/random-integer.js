/**
 * Генерирует случайное целое число между минимальным и максимальным значениями включительно.
 *
 * @param {number} min Минимальное число
 * @param {number} max Максимальное число
 * @returns {number} Случайное целое число в диапазоне от min до max
 */

function getRandomInt(min, max) {
  min = Number.parseInt(min, 10);
  max = Number.parseInt(max, 10);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { getRandomInt };