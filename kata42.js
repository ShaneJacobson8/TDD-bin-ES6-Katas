// 42: array - `Array.prototype.keys`
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.keys` returns an iterator for all keys in the array', () => {

  it('`keys()` returns an iterator', function() {
    const arr = ['a'];//removed one item from array
    const iterator = arr.keys();
    //iterator.next() is called twice, first time it returns the value, then reports false, indicating it found an item in the array at that index
    //with a single item array, the second .next() call has no value to return and reports that done is 'true'
    assert.deepEqual(iterator.next(), {value: 0, done: false});
    assert.deepEqual(iterator.next(), {value: void 0, done: true});
  });
  
  it('gets all keys', function() {
    const arr = ['a', 'b','c'];
    const keys = Array.from(arr.keys());
    //.keys() returns an array of keys for all items in an array
    assert.deepEqual(keys, [0, 1, 2]);
  });
  
  it('empty array contains no keys', function() {
    const arr = [];
    const keys = [...arr.keys()];
    //if there are no items in the array, there will be no keys to return
    assert.equal(keys.length, 0);
  });
  
  it('a sparse array without real values has keys though', function() {
    const arr = [,,];
    const keys = [...arr.keys()];
//a comma at the end of an array is ignored by JS, so this array only indicates two values
    assert.deepEqual(keys, [0, 1]);
  });

  it('also includes holes in sparse arrays', function() {
    const arr = ['a', , 'c'];
    const keys = [...arr.keys()];
    //an undefined value in an array still has a key
    assert.deepEqual(keys, [0, 1, 2]);
  });
});