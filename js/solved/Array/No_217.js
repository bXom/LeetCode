'use strict';
/**
 * NO.217
 * 存在重复元素
 * 给定一个整数数组，判断是否存在重复元素。
 * 如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false
 * @param {number[]} nums
 * @return {boolean}
 */
const sol1 = (nums) => {
    let set = new Set(nums);
    return set.size !== nums.length;
};
const sol2 = (nums) => {
    let long = nums.length, arr = [];
    for (let i = 0; i < long; i++) {
        const e = nums[i];
        if (arr[e]) return true;
        arr[e] = 1;
    }
    return false;
};
console.log(sol2([1, 2, 3]));