/**
 * Создает повторно используемую функцию форматирования валюты с учетом локали, используя Intl.NumberFormat API.
 */

function createCurrencyFormatter(defaultOptions = {}) {
  const baseFormatter = new Intl.NumberFormat(
    defaultOptions.locale || 'en-US', {
      style: 'currency',
      currency: defaultOptions.currency || 'USD',
      minimumFractionDigits: defaultOptions.decimalPlaces,
      maximumFractionDigits: defaultOptions.decimalPlaces,
      notation: defaultOptions.notation || 'standard',
      currencyDisplay: defaultOptions.currencyDisplay || 'symbol',
    }
  )

  return function formatCurrency(number) {
    if (typeof number !== 'number' || !isFinite(number)) {
      return defaultOptions.fallback || '---';
    }

    try {
      return baseFormatter.format(number);
    } catch (error) {
      console.error("Currency formatting error:", error);
      return defaultOptions.fallback || '---';
    }
  };
}

export { createCurrencyFormatter };