'use strict';
/**
 * NO.35
 * 搜索插入位置
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
 * 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 请必须使用时间复杂度为 O(log n) 的算法。
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const sol1 = (nums, target) => {
    let long = nums.length;
    if (long === 0) return 0;
    let start = 0, end = long - 1;
    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            if (mid === 0) return 0;
            else if (nums[mid - 1] < target) return mid;
            end = mid - 1;
        } else {
            if (mid === (long - 1)) return long;
            else if (nums[mid + 1] > target) return mid + 1;
            start = mid + 1;
        }
    }
};
console.log(sol1([], 10));