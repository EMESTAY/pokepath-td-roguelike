import { describe, expect, test } from 'bun:test';
import { Utility } from '../src/js/utils/Utility.js';

describe('Utility', () => {
  const utils = new Utility();

  test('numberDot should format numbers correctly', () => {
    // Default (0) uses comma
    expect(utils.numberDot(1000)).toBe('1,000');

    // Lang 2 uses space
    expect(utils.numberDot(1000, 2)).toBe('1 000');

    // Others use dot
    expect(utils.numberDot(1000, 1)).toBe('1.000');
  });

  test('minutsToTime should format minutes to H:MM', () => {
    expect(utils.minutsToTime(65)).toBe('1:05');
    expect(utils.minutsToTime(120)).toBe('2:00');
    expect(utils.minutsToTime(5)).toBe('0:05');
  });
});
