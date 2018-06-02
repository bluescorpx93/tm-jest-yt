const strFuncs = require('./reverse_string');

// test('check if reverseString function exists', () => {
//   expect(strFuncs.reverseStr).toBeDefined();
// });

test('check if reverseString function exists', () => {
  expect(strFuncs.reverseString).toBeDefined();
});

test('check if string reverses', () => {
  const theString = 'hello';
  const reversed = 'olleh';
  expect(strFuncs.reverseString(theString)).toEqual(reversed);
});

test("check if string reverses with case sensitivity", () => {
  const theString = 'HeLlo';
  const reversed = 'olleh';
  expect(strFuncs.reverseStringTurnLowerCase(theString)).toEqual(reversed);
});
