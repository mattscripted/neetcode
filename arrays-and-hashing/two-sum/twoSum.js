class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum (nums, target) {
    const valueToIndex = {};

    for (const [index, num] of nums.entries()) {
      const desiredPair = target - num;

      // Have we seen that match before?
      if (Object.hasOwn(valueToIndex, desiredPair)) {
        return [valueToIndex[desiredPair], index];
      }

      valueToIndex[num] = index;
    }
  }
}

export default new Solution();
