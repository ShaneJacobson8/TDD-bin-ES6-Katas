// 29: array - `Array.from` static method
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.from` converts an array-like object or list into an Array', () => {

  const arrayLike = {0: 'one', 1: 'two', length: 2};
  
  it('call `Array.from` with an array-like object', function() {
    const arr = Array.from(arrayLike);//array.from pulling an array from arrayLike
    
    assert.deepEqual(arr, ['one', 'two']);
  });
  
  it('a DOM node`s classList object can be converted', function() {
    const domNode = document.createElement('span');
    domNode.classList.add('some');
    domNode.classList.add('other');
    const classList = Array.from(domNode.classList);//array.from pulling data from domNode to create an array

    assert.equal(''+classList, ''+['some', 'other']);
  });
  
  it('convert a NodeList to an Array and `filter()` works on it', function() {
    const nodeList = Array.from(document.createElement('span'));
    //set nodeList to be an Array using Array.from
    const divs = nodeList.filter((node) => node.tagName === 'div');
    

    assert.deepEqual(divs.length, 0);
  });
  
  describe('custom conversion using a map function as second param', () => {
    it('we can modify the value before putting it in the array', function() {
      const arr = Array.from(arrayLike, (value) => value.toUpperCase());
  //function is changing the items to upper case before assigning them to arr
      assert.deepEqual(arr, ['ONE', 'TWO']);
    });
    
    it('and we also get the object`s key as second parameter', function() {
      const arr = Array.from(arrayLike, (value, key) => `${key}=${value}`);
      //added second parameter because function needed second value
      assert.deepEqual(arr, ['0=one', '1=two']);
    });
  });
  
});