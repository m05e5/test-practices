// const { expect } = require('@jest/globals');
const stringLength = require('./functions');

test('count string', () => {
  expect(stringLength('hello')).toBe(5);
  expect(() => stringLength('hello world')).toThrow(Error);
});