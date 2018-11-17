// 17: unicode - in strings
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('unicode strings', () => {

  it('are \\u prefixed', () => {
    const nuclear = `\u2622`; //added \u before code and made expression literal
    assert.equal(nuclear, '☢');
  });

  it('value is 4 bytes/digits', () => {
    const nuclear = '\u2622'; //removed extra digit from unicode
    assert.equal(`no more ${nuclear}`, 'no more ☢');
  });

  it('value is hexadecimal', () => {
    const nuclear = `\u006e\u006f more \u2622`; //replaced unicode 
    assert.equal(nuclear, 'no more ☢');
  });

  it('curly braces may surround the value', () => {
    const nuclear = `\u{006E}\u006F more \u2622`;
    assert.equal(nuclear, 'no more ☢');
  }); //removed extra 0's, unicode value will work with or without {}

});
