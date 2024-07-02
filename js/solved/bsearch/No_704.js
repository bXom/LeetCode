'use strict';
/**
 * NO.704
 * 二分查找
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target，
 * 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const sol1 = (nums, target) => {
    let long = nums.length;
    if (long < 1) return -1;
    let start = 0, end = long - 1;
    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) start = mid + 1;
        else end = mid - 1;
    }
    return -1;
};
console.log(sol1([-1, 0, 3, 5, 9, 12], 9));