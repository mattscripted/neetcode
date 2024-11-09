import solution from './twoSum';

describe('twoSum', () => {
  it('returns [0, 1] in a list of 2, since we assume there will always be an answer', () => {
    expect(solution.twoSum([1, 2], 3)).toEqual([0, 1]);
  });

  it('returns [0, 1] in a list of 3, if the first two values equal the target', () => {
    expect(solution.twoSum([1, 2, 3], 3)).toEqual([0, 1]);
  });

  it('returns [0, 2] in a list of 3, if the first and last two values equal the target', () => {
    expect(solution.twoSum([1, 2, 3], 4)).toEqual([0, 2]);
  });

  it('returns [1, 2] in a list of 3, if the last two values equal the target', () => {
    expect(solution.twoSum([1, 2, 3], 5)).toEqual([1, 2]);
  });

  it('returns [1, 2] in a list of 4, if the middle two values equal the target', () => {
    expect(solution.twoSum([1, 2, 3, 4], 5)).toEqual([1, 2]);
  });
});
