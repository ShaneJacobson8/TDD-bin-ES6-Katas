// 11: destructuring - string
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructuring also works on strings', () => {
  it('destructure every character, just as if the string was an array', () => {
    let [a, b, c] = 'abc';
    assert.deepEqual([a, b, c], ['a', 'b', 'c']);
  });
  it('missing characters are undefined', () => {
    const [a, b, c] = 'ab'; //a was not defined in the array, but was called
    assert.equal(c, void 0);
  });
  it('unicode character work too', () => {
    const [ space, coffee] = ' ☕'; //removed the extra space (unicode)
    assert.equal(coffee, '\u{2615}');
  });
});
