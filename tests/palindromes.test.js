const palindromes = require('../palindromes');
const { prepareStr, isPalindrome, stringStartPalindrome } = palindromes;

// Test suite 1
describe('prepareStr()', () => {
  it('converts the given string to lowercase', () => {
    expect(prepareStr('aAaA')).toBe('aaaa');
  });
  it('removes all non-letter characters', () => {
    expect(prepareStr('To infinity, and beyond!')).toBe('toinfinityandbeyond');
  });
});

// Test suite 2
describe('isPalindrome()', () => {
  it('returns true when given a palindrome', () => {
    expect(isPalindrome('aba')).toBe(true);
    expect(isPalindrome('abba')).toBe(true);
  });
  it('returns false when given a non-palindrome', () => {
    expect(isPalindrome('abb')).toBe(false);
    expect(isPalindrome('aaba')).toBe(false);
  });
});

// Test suite 3
describe('stringStartPalindrome()', () => {
  it('returns the longest palindrome at the start of the string', () => {
    expect(stringStartPalindrome('wow')).toBe('wow');
    expect(stringStartPalindrome('ahha')).toBe('ahha');
    expect(stringStartPalindrome('hohoho')).toBe('hohoh');
  });
  it('returns null if no length 3+ palindrome starts the string', () => {
    expect(stringStartPalindrome('ww')).toBe(null);
    expect(stringStartPalindrome('abcda')).toBe(null);
    expect(stringStartPalindrome('bananarama')).toBe(null);
  });
});

// Test suite 4
describe('palindromes()', () => {
  it('correctly identifies one-word palindromes', () => {
    expect(palindromes('madam')).toEqual(['madam']);
    expect(palindromes('racecar')).toEqual(['racecar']);
  });
  it('returns an empty array when given no palindromes', () => {
    expect(palindromes('tic tac toe')).toEqual([]);
  });
  it('ignores casing', () => {
    expect(palindromes('WoW')).toEqual(['wow']);
  });
  it('ignores punctuation', () => {
    expect(palindromes('yo, banana boy!')).toEqual(['yobananaboy']);
  });
  it('detects multi-word palindromes', () => {
    expect(palindromes('A man, a plan, a canal, Panama')).toEqual([
      'amanaplanacanalpanama',
    ]);
  });
});
