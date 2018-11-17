// 6: arrow functions - binding
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

class LexicallyBound {
  getFunction() {
    return () => {
      return new LexicallyBound();
    }
  }
  getArgumentsFunction() {
    return function() {return arguments}
  }
}

describe('Arrow functions have lexical `this`, no dynamic `this`', () => {
  it('bound at definition time, use `=>`', function() {
    var bound = () => new LexicallyBound();
    var fn = () => bound;
    assert.strictEqual(fn(), bound);
  });
  //arrow functions are bound when defined. 
  
  it('can NOT bind a different context', function() {
    var bound = () => new LexicallyBound();
    var fn = () => bound;
    var anotherObj = fn();
    var expected = anotherObj;
    assert.strictEqual(fn.call(anotherObj), expected);
  });
  //once defined, cannot be bound to anything else? only called?
  
  it('`arguments` does NOT work inside arrow functions', function() {
    var bound = () => new LexicallyBound();
    var fn = () => bound;
    assert.equal(fn(1, 2).length, 0);
  });
});
//functions perform a purpose(function). 
//Give it information, get back processed information. 
//can't pull in arguments from outside the scope
