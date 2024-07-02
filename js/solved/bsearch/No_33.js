'use strict';
/**
 * NO.33
 * 搜索旋转排序数组
 * 整数数组 nums 按升序排列，数组中的值 互不相同 。
 * 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了旋转，
 * 使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]
 * （下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
 * 给你旋转后 的数组 nums 和一个整数 target，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
 * 输入：nums = [4,5,6,7,0,1,2], target = 0; 输出：4
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const sol1 = (nums, target) => {
    let long = nums.length;
    let start = 0, end = long - 1;
    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (target > nums[mid]) {
            if (target === nums[start]) {
                return start;
            } else if (target < nums[start]) {
                start = mid + 1;
                // target > nums[start]
            } else {
                start = start + 1;
            }
            // target < nums[mid]
        } else {
            if (target === nums[start]) {
                return start;
            } else if (target > nums[start]) {
                end = mid - 1;
                // target < nums[start]
            } else {
                start = start + 1;
            }
        }
    }
    return -1;
};
console.log(sol1([8, 9, 2, 3, 4], 9));