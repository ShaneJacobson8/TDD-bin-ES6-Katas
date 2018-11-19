// 43: array - `Array.prototype.values` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.values` returns an iterator for all values in the array', () => {

  it('`values()` returns an iterator', function() {
    const arr = [];//deleted all items in array
    const iterator = arr.values();
    //for an empty array, iterator has no value to return, and sends done: true
    assert.deepEqual(iterator.next(), {value: void 0, done: true});
  });
  
  it('use `iterator.next()` to drop first value', function() {
    const arr = ['keys', 'values', 'entries'];
    const iterator = arr.values();
    iterator.next();
//.next() will drop the first item from an array
    assert.deepEqual([...iterator], ['values', 'entries']);
  });
  
  it('empty array contains no values', function() {
    const arr = [...[...[...[...'']]]];
    const values = [...arr.values()];
    //values() cannot return values that don't exist
    assert.equal(values.length, 0);
  });
  
  it('a sparse array without real values has values though', function() {
    const arr = [,,];
    const keys = [...arr.values()];
    //sparse array has keys, and will return values even if the values are undefined
    assert.deepEqual(keys, [void 0, void 0]);
  });
  
  it('also includes holes in sparse arrays', function() {
    const arr = ['a',,'c'];
  //a hole in a sparse array has a value that is not defined
    assert.deepEqual([...arr.values()], ['a', void 0, 'c']);
  });
  
});
