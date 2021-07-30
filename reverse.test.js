const reverseString = require('./reverse');

test('reverse a string', () => {
  expect(reverseString('hello world')).toBe(11);
  expect(reverseString('hello world')).not.toBe(0);
});