/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let long = nums.length;
    while (condition) {
        let index = parseInt(long / 2);
        if (nums[index] > nums[long]) return findMin(nums.slice(index));
        if (nums[0] > nums[index]) return findMin(nums.slice(0, index));
        if ((nums[index] === nums[0]) && (nums[index] === nums[long])) retrun
    }
};
const sol1 = (nums) => {
    let long = nums.length;
    let half = parseInt(long / 2);
    if (nums[half - 1] > nums[half]) return nums[half];
    for (let i = 0; i < half; i++) {
        let index1 = half - i - 1, index2 = half - i - 2;
        let index3 = half + i, index4 = half + i + 1;
        if (index1 > 0) {
            if (nums[index2] > nums[index1]) return nums[index1];
        }
        if (index4 < long) {
            if (nums[index4] < nums[index3]) return nums[index4];
        }
    }
    return nums[0];
}
// @lc code=end