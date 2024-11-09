import solution from './productExceptSelf';

describe('productExceptSelf', () => {
  it('output[i] is the other value, when there are only 2 values', () => {
    expect(solution.productExceptSelf([1, 2])).toEqual([2, 1]);
  });

  it('output[i] is the product of the other 2 values, when there are 3 values', () => {
    expect(solution.productExceptSelf([1, 2, 3])).toEqual([6, 3, 2]);
  });

  it('output[i] is the product of the other 3 values, when there are 4 values', () => {
    expect(solution.productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });
});
