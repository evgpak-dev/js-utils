import { describe, it, expect } from "vitest";
import { createCurrencyFormatter } from "./currency_formatter.js";

describe("Currency Formatter", () => {
  it("should format ruble", () => {
    const formatRUB = createCurrencyFormatter({
      locale: "ru-RU",
      currency: "RUB",
      decimalPlaces: 0,
    });

    const result = formatRUB(1_999_999);

    expect(result).toBe("1 999 999 ₽");
  });

  it("should format usd", () => {
    const formatUSD = createCurrencyFormatter();

    const result = formatUSD(99.99);

    expect(result).toBe("$99.99");
  });

  it("should format usd to compact form", () => {
    const formatCompactUSD = createCurrencyFormatter({
      notation: "compact",
      decimalPlaces: 1,
    });

    const result = formatCompactUSD(987_000);

    expect(result).toBe('$987.0K');
  });
});
