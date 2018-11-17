// 33: array - `Array.prototype.findIndex` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.findIndex` makes finding items in arrays easier', () => {

  it('takes a compare function, returns the index where it returned true', function() {
    const foundAt = [false, true].findIndex(item => item === true);
    
    assert.equal(foundAt, 1);
  });

  it('returns the first position it was found at', function() {
    const foundAt = [0, 1, 1, 1].findIndex(item => item === 1);
    //function wasn't looking for the value properly, made comparison ===
    assert.equal(foundAt, 1);
  });

  it('returns `-1` when nothing was found', function() {
    const foundAt = [1, 2, 3].findIndex(item => item > 4);
    //changed function to look for item that wasn't in the array
    assert.equal(foundAt, -1);
  });

  it('the findIndex callback gets the item, index and array as arguments', function() {
    const three = 3;
    const containsThree = arr => arr.indexOf(three) > -1;
    function theSecondThree(item, index, arr) { //the findIndex callback wasn't getting all 3 parameters passed to it
      const preceedingItems = arr.slice(0, index);
      return containsThree(preceedingItems);
    }
    const foundAt = [1, 1, 2, 3, 3, 3].findIndex(theSecondThree);
    
    assert.equal(foundAt, 4);
  });

  it('combined with destructuring complex compares become short', function() {
    const bob = {name: 'Bob'};
    const alice = {name: 'Alice'};
    const foundAt = [bob, alice].findIndex(({name:{length}}) => length > 3);
//too many arguments...removed :l from {name:{length}}
    assert.equal(foundAt, 1);
  });

});
