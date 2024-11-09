import solution from './topKFrequent';

describe('topKFrequent', () => {
  it('returns the top k frequent elements', () => {
    expect(solution.topKFrequent([1], 1)).toEqual([1]);
    expect(solution.topKFrequent([1, 1, 2], 1)).toEqual([1]);
    expect(solution.topKFrequent([1, 1, 2], 2)).toEqual([1, 2]);
    expect(solution.topKFrequent([3, 2, 1, 2, 3, 3], 2)).toEqual([3, 2]);
  });
});
