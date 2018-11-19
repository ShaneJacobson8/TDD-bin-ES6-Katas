// 41: array - entries
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`[].entries()` returns an iterator object with all entries', function() {
  
  it('returns key+value for each element', function() {
    const arr = ['a', 'b', 'c'];
    const entriesAsArray = Array.from(arr.entries());
    
    assert.deepEqual(entriesAsArray, [[0,"a"], [1,"b"], [2,"c"]]);
  });
  
  it('empty elements contain the value `undefined`', function() {
    const arr = ['one'];
    arr[2] = 'three';
    const secondValue = Array.from(arr.entries())[1];
//create a new array from .entries(), including key+value, returning 2nd item in array, which is empty
    assert.deepEqual(secondValue, [1, void 0]);
  });

  describe('returns an iterable', function() {
    
    it('has `next()` to iterate', function() {
      const arr = ['one'];
      let value = arr.entries().next().value();
      //arr.entries creates new array with key+value, 
      //.next() checks for another item in the array and returns the value as an object
      //.value() pulls the value out of the object returned
      assert.deepEqual(value, [0, 'one']);
    });
    
  });
});