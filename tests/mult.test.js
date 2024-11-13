const mult = require('../src/mult');

test('Multiplying 1 * 2 Equals 3', () => {
  expect(mult(1, 2)).toBe(2);
});