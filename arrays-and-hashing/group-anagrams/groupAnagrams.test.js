import solution from './groupAnagrams';

describe('groupAnagrams', () => {
  it('returns an array of the array, if there is only one word', () => {
    expect(solution.groupAnagrams(['foo'])).toEqual([['foo']]);
  });

  it('puts anagrams in the same group', () => {
    expect(solution.groupAnagrams(['foo', 'oof'])).toEqual([['foo', 'oof']]);
  });

  it('puts different anagrams in different groups', () => {
    expect(solution.groupAnagrams(['foo', 'bar', 'oof', 'rab'])).toEqual([['foo', 'oof'], ['bar', 'rab']]);
  });
});
