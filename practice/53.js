/**
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 子数组 是数组中的一个连续部分。
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let maxSum = nums[0];
    let current = nums[0];
    nums.forEach((e, i) => {
        if (i === 0) return;
        if (e + current >= e) current += e;
        else current = e;
        if (current > maxSum) maxSum = current;
    });
    return maxSum;
};
console.log(maxSubArray([-2, -1, -3, -4]));