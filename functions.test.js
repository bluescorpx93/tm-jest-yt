const allFunctions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
  expect(allFunctions.add(2,2)).toBe(4);
});

test('Adds 3 + 3 to not equal 5', () => {
  expect(allFunctions.add(3,3)).not.toBe(5);
});

test('Should be null', () => {
  expect(allFunctions.isNull()).toBeNull();
});

test('Should be Falsy', () => {
  expect(allFunctions.checkValue(null)).toBeFalsy();
  expect(allFunctions.checkValue(0)).toBeFalsy();
  expect(allFunctions.checkValue(undefined)).toBeFalsy();
});

test('User should be DC', () => {
  const userObj = {
    fullname: 'Don Corleone',
    email : 'test@underground.com'
  }
  expect( allFunctions.createUser() ).toEqual(userObj);

  const contactObj = {
    fullname: 'Don Corleone',
    cell : '+00142124745'
  }
  expect( allFunctions.createUser() ).toEqual(contactObj);
});


test("Should be under 1400", () => {
  const load1 = 800;
  const load2 = 600;
  const totalLoad = load1 + load2;
  expect(totalLoad).toBeLessThan(1400);
});

test("There is no I in team", () => {
  expect('team').not.toMatch(/I/);
});

test('Admin should be in usernames', () => {
  const usernames = ['mark', 'ben', 'harry'];
  expect(usernames).toContain('admin');
});

test('Fish should be in items', () => {
  const items = ['fish', 'cat', 'fly'];
  expect(items).toContain('fish');
})
