import solution from './validAnagram';

describe('validAnagram', () => {
  it('returns true, if both strings are the same', () => {
    expect(solution.isAnagram('a', 'a')).toBe(true);
  });

  it('returns false, if both strings are of different length', () => {
    expect(solution.isAnagram('a', 'aa')).toBe(false);
  });

  it('returns false, if both strings contain the same characters but with a different tally', () => {
    expect(solution.isAnagram('aab', 'bba')).toBe(false);
  });

  it('returns true, if both strings contain the same characters with the same tally', () => {
    expect(solution.isAnagram('ab', 'ba')).toBe(true);
  });
});
