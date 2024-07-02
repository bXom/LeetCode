/**
 * https://leetcode.cn/problems/two-sum/description/
 * no1
 * 两数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  return hashTable(nums, target);
};
/**
 * 哈希表
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const hashTable = (nums, target) => {
  let hashT = [];
  let result = [];
  try {
    nums.forEach((x, index) => {
      let y = target - x;
      if (hashT[y] >= 0) {
        result.push(hashT[y]);
        result.push(index);
      }
      hashT[x] = index;
    });
    return result;
  } catch (e) {
    console.log(e);
    return result;
  }
}
/**
 * 遍历
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const traverse = (nums, target) => {
  let index = 0;
  for(let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if(nums[i] + nums[j] == target) {
        return [i,j];
      }
    }
  }
  return [];
};
console.log(twoSum([1, 2, 3], 4));