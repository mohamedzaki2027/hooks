const sum = require('../src/sum');

test('Adding 1 + 2 Equals 3', () => {
  expect(sum(1, 2)).toBe(3);
});