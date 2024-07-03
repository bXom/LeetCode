/**
 * https://leetcode.cn/problems/group-anagrams/description/
 * no49
 * 字母异位词分组
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const map = {};
  strs.forEach((str, index) => {
    let strArr = str.split('');
    const strIndexArr = new Array(26);
    strArr.forEach((s, i) => {
      let sPoint = s.charCodeAt() - 'a'.charCodeAt();
      strIndexArr[sPoint] = 1;
    });
    if (map[strIndexArr]) map[strIndexArr].push(str);
    else map[strIndexArr] = [str];
  });
  return Object.values(map);
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));