class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams (strs) {
    const groups = {};

    strs.forEach(str => {
      const groupKey = this.getGroupKey(str);

      if (!Object.hasOwn(groups, groupKey)) {
        groups[groupKey] = [str];
      } else {
        groups[groupKey].push(str);
      }
    });

    const result = [];
    for (const groupKey in groups) {
      result.push(groups[groupKey]);
    }

    return result;
  }

  getGroupKey (str) {
    return str.split('').sort().join('');
  }
}

export default new Solution();
