const asyncfunctions = require('./functions')

test("Some Randome Test", () => {
  expect(asyncfunctions.dummyFunc()).toBe(5);
});

test('User Fetched name should be Learne Graham', ()=> {
  expect.assertions(1);
  const name = 'Leanne Graham';
  return asyncfunctions.fetchUser_jsonplaceholder().then( api_data => {
    expect( api_data.name ).toEqual(name);
  });
});

test('User Fetched first_name should be Janet', () => {
  expect.assertions(1);
  const first_name = 'Janet';
  return asyncfunctions.fetchUser_reqresin().then( api_data => {
    expect( api_data.first_name).toEqual(first_name);
  });
});

test('User Fetched username should be Bret', async () => {
  const api_data = await  asyncfunctions.fetchUser_jsonplaceholder();
  const username = 'Bret';
  expect(api_data.username).toEqual(username);
});

test
