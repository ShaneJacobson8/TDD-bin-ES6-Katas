// 32: array - `Array.prototype.find` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.find` makes finding items in arrays easier', () => {

  it('takes a compare function', function() {
    const found = [true].find(locate => true);
    //created a function inside find() that returned true.
    assert.equal(found, true);
  });

  it('returns the first value found', function() {
    const found = [0, 1, 2].find(item => item > 1);
//added 2 to the array so the function could find an item > 1
    assert.equal(found, 2);
  });

  it('returns `undefined` when nothing was found', function() {
    const found = [1, 2, 3].find(item => item === '');
//could have removed the item from the array or changed what the function was looking for
    assert.equal(found, void 0);
  });

  it('combined with destructuring complex compares become short', function() {
    const bob = {name: 'Bob'};
    const alice = {name: 'Alice'};
    const found = [bob, alice].find(({name}) => name === 'Alice');
    //looking for Alice, set the function to compare the incoming parameter to be 'Alice'
    assert.equal(found, alice);
  });

});
