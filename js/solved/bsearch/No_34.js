'use strict';
/**
 * NO.34
 * 在有序数组中查找制定元素的第一个和最后一个位置
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 * 进阶：你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
 * 输入：nums = [5,7,7,8,8,10], target = 8；输出：[3,4]
 * 输入：nums = [5,7,7,8,8,10], target = 6；输出：[-1,-1]
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const sol1 = (nums, target) => {
    let first = firstEqual(nums, target);
    let last = lastEqual(nums, target);
    return [first, last];
};
const firstEqual = (nums, val) => {
    let start = 0, end = nums.length - 1;
    let index = end + 1;
    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if (nums[mid] > val) {
            end = mid - 1;
        } else if (nums[mid] < val) {
            start = mid + 1;
        } else if (mid < index) {
            index = mid;
            end = mid - 1;
        }
    }
    if (index >= nums.length) return -1;
    return index;
};
const lastEqual = (nums, val) => {
    let start = 0, end = nums.length - 1;
    let index = -1;
    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if (nums[mid] > val) {
            end = mid - 1;
        } else if (nums[mid] < val) {
            start = mid + 1;
        } else if (mid > index) {
            index = mid;
            start = mid + 1;
        }
    }
    if (index >= nums.length) return -1;
    return index;
};