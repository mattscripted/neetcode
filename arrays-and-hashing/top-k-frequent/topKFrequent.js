class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent (nums, k) {
    const tallyByNum = {};

    // Count how often each num appears
    for (const num of nums) {
      tallyByNum[num] = Object.hasOwn(tallyByNum, num)
        ? tallyByNum[num] + 1
        : 1;
    }

    // Convert hash to array of [num, count]
    const sortedTally = [];
    for (const num in tallyByNum) {
      // When we put the num as the key, it became a string, but we want a number
      sortedTally.push([Number(num), tallyByNum[num]]);
    }
    // Sort in descending order
    sortedTally.sort((a, b) => b[1] - a[1]);

    // Reduce results from [num, count] to just the num, and return the top k
    return sortedTally.map(([num]) => num).slice(0, k);
  }
}

export default new Solution();
