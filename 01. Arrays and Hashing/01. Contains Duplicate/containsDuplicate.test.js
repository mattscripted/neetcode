import solution from './containsDuplicate';

describe('containsDuplicate', () => {
  it('returns false, if there are no duplicates', () => {
    expect(solution.hasDuplicate([1, 2])).toBe(false);
  });

  it('returns true, if there are duplicates', () => {
    expect(solution.hasDuplicate([1, 1])).toBe(true);
  });
});
