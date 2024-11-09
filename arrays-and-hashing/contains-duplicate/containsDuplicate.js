class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate (nums) {
    const uniqueNums = new Set();

    for (const num of nums) {
      if (uniqueNums.has(num)) {
        // We have found a duplicate
        return true;
      }

      uniqueNums.add(num);
    }

    return false;
  }
}

export default new Solution();
