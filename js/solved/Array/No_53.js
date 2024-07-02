'use strict';
/**
 * NO.53
 * 最大子序和
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * @param {number[]} nums
 * @return {number}
 * 双指针
 */
const sol1 = (nums) => {
    let long = nums.length;
    if (long === 0) return 0;
    let count = 0;
    let maxCount = nums[0];
    nums.forEach(e => {
        if ((count + e) >= e) count = count + e;
        else count = e;
        if (count >= maxCount) maxCount = count;
    });
    return maxCount;
};
console.log(sol1([-2, 1, -3, 4, -1, 2, 1, -5, 4]));