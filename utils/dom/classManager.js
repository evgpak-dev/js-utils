/**
 * Функция для манипулирования CSS-классами одного или нескольких DOM-элементов.
 *
 * @param {string} selector
 * @param {Element|Document} context
 * @returns {object}
 */

export function classManager(selector, context = document) {
  const elements = Array.from(context.querySelectorAll(selector));

  const self = {
    addClass(classNames) {
      elements.forEach(el => el.classList.add(...classNames.split(' ')));
      return this;
    },

    removeClass(classNames) {
      elements.forEach(el => el.classList.remove(...classNames.split(' ')));
      return this;
    },

    toggleClass(className) {
      elements.forEach(el => el.classList.toggle(className));
      return this;
    }
  };

  return self;
}