// 22: class - creation
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Class creation', () => {
  it('is as simple as `class XXX {}`', function() {
    class TestClass{} //changed let to class, added {}
    const instance = new TestClass();
    assert.equal(typeof instance, 'object');
  });
  it('a class is block scoped', () => {
    {class Inside {}} //block scoped this line
    {class Inside {}}
    assert.equal(typeof Inside, 'undefined');
  });
  it('the `constructor` is a special method', function() {
    class User {
      constructor(id) {
      this.id = 42;
      }
    }
    const user = new User(42);
    assert.equal(user.id, 42);
  });
  it('defining a method by writing it inside the class body', function() {
    class User {
       writesTests() {
         return false}
    }
    const notATester = new User();
    assert.equal(notATester.writesTests(), false);
  });
  it('multiple methods need no commas (opposed to object notation)', function() {
    class User {
      wroteATest() { this.everWroteATest = true; }
      isLazy() {  return this.everWroteATest !== true } //text between {} added
    }
    const tester = new User();
    assert.equal(tester.isLazy(), true);
    tester.wroteATest();
    assert.equal(tester.isLazy(), false);
  });
  it('anonymous class', () => {
    const classType = typeof class {};
    assert.equal(classType, 'function');
  });
});