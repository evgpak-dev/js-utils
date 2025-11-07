import { describe, it, expect } from "vitest";
import { kebabize } from "./kebabize.js";

describe('Convert a camelCase string to kebab-case string', () => {
  it('should convert a string', () => {
    const result = kebabize('camelsHaveThreeHumps');

    expect(result).toBe('camels-have-three-humps');
  });
});