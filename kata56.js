// 56: Generator - Send function to a generator
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Pass a function to a generator', () => {
  it('the generator can receive a function as a value', function() {
    let fn = function() {};
    function* generatorFunction(fn) {
      assert.equal(yield null, fn); // remember, don't touch this line
    }
    let iterator = generatorFunction();
    iterator.next();
    iterator.next();
  });
  it('pass a function to the iterator, which calls it', function() {
  let fn = () => 2 
  //need a function, let limits it to this scope, same as above example
  //assert is looking for 2 in the second spot of the array
    function* generatorFunction() {
      yield (yield 1)();//yield provides the first spot, can't pass a param to first .next()
    }
    var iterator = generatorFunction();
    var iteratedOver = [iterator.next().value, iterator.next(fn).value];
    assert.deepEqual([1, 2], iteratedOver);
  });
  it('nesting yielded function calls', function() {
    let fn2 = () => 2 //similar to above
    let fn3 = 3 // would only accept one function though...
    function* generatorFunction() {
      yield (yield (yield 1)());//why would anyone do this, anyway?
    }
    let iterator = generatorFunction();
    var iteratedOver = [iterator.next().value, iterator.next(fn2).value, iterator.next(fn3).value];
    assert.deepEqual([1, 2, 3], iteratedOver);
  });
});

