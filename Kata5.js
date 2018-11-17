// 5: arrow functions - basics
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('Arrow functions', function() {
  it('are shorter to write, instead of `function(){}` write `() => {}`', function() {
    var func = `() => {}`;
    assert.equal('' + func, '() => {}');
  });
  //This requires the backtick to be read correctly by the test
  it('instead `{}` use an expression, as return value', function() {
    var func = () => 'I return too';
    assert.equal(func(), 'I return too');
  });
  // a single line arrow function doesn't need the `{}`
  it('one parameter can be written without parens', () => {
    var func = p => 25 - 1;
    assert.equal(func(25), 24);
  });
  
  it('many params require parens', () => {
    var func = (param, param1) => param + param1;
    assert.equal(func(23, 42), 23+42);
  });
  //multiple parameters need to be grouped by () and seperated by ,
  it('the function body needs parens to return an object', () => {
    var func = () => ({iAm: 'an object'});
    assert.deepEqual(func(), {iAm: 'an object'});
  });
  // () are needed around the object so the function doesn't confuse what to do with the contents inside the {}
});
