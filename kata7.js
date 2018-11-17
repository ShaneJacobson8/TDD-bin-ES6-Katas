// 7: block scope - let
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('`let` restricts the scope of the variable to the current block', () => {
  describe('`let` vs. `var`', () => {
    it('`var` works as usual, it`s scope is the function', () => {
      if (true) {
        var varX = true;  //changed from let to var, var can see outside the current block, but inside the function
      }
      assert.equal(varX, true);
    });
    it('`let` restricts scope to inside the block', () => {
      if (true) {
        let letX = true; //changed from var to let, because it needed to be limited to the scope of the if statement
      }
      assert.throws(() => console.log(letX));
    });
  });

  describe('`let` usage', () => {
    it('`let` use in `for` loops', () => {
      let obj = {x: 1};
      for (let key in obj) {} //changed var to let, throws error because let is not initialized until used. circular reference
      assert.throws(() => console.log(key));
    });
    
    
    it('create artifical scope, using curly braces', () => {
      {
        let letX = true;   //changed var to let, var is global, let is contained by the {} and inaccessible to the console.log statement
      }
      assert.throws(() => console.log(letX));
    });
  });
});
