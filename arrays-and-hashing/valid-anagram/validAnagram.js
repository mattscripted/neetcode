class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }

    const tally = {};

    // Increment tally for each character in s
    for (const charInS of s) {
      tally[charInS] = Object.hasOwn(tally, charInS) ? tally[charInS] + 1 : 1;
    }

    // Decrement tally for each character in t
    for (const charInT of t) {
      tally[charInT] = Object.hasOwn(tally, charInT) ? tally[charInT] - 1 : -1;
    }

    // Verify tally is 0 for all characters
    for (const char in tally) {
      if (tally[char] !== 0) {
        return false;
      }
    }

    return true;
  }
}

export default new Solution();