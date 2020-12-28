const palindromes = require('./palindromes');

// Test suite 1
describe('palindromes()', () => {
  // Test 1
  it('correctly identifies one-world palindrome', () => {
    // Assertion
    expect(palindromes('madam')).toEqual(['madam']);
  });
});
