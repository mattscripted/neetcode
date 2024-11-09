class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf (nums) {
    // Get the prefix product for each position
    const prefixProduct = [];
    for (let p = 0; p < nums.length; p++) {
      if (p === 0) {
        prefixProduct[p] = 1;
      } else {
        prefixProduct[p] = prefixProduct[p - 1] * nums[p - 1];
      }
    }

    // Get the suffix product for each position
    const suffixProduct = [];
    for (let s = nums.length - 1; s >= 0; s--) {
      if (s === nums.length - 1) {
        suffixProduct[s] = 1;
      } else {
        suffixProduct[s] = suffixProduct[s + 1] * nums[s + 1];
      }
    }

    // Get the result for each position by multipling the prefix and suffic products
    const result = [];
    for (let i = 0; i < nums.length; i++) {
      result.push(prefixProduct[i] * suffixProduct[i]);
    }

    return result;
  }
}

export default new Solution();
