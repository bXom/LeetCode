/**
 * NO.53
 * 最大子序和
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * @param {number[]} nums
 * @return {number}
 */
// 贪心算法
const sol1 = (nums) => {
    let count = nums[0];
    let maxCount = nums[0];
    nums.forEach((e, i) => {
        if (i === 0) return;
        count = Math.max(count + e, e);
        maxCount = Math.max(count, maxCount);
    });
    return maxCount;
};
// 动态规划：当前向元素大于0，则与当前元素相加更新当前元素位置的值
const sol2 = (nums) => {
    let maxSum = nums[0];
    let frontV = nums[0];
    nums.forEach((e, i) => {
        if (i === 0) return;
        if (frontV > 0) nums[i] += frontV;
        if (maxSum < nums[i]) maxSum = nums[i];
        frontV = nums[i];
    });
    return maxSum;
};
console.log(sol2([-2, -1, -2]));
// console.log(sol2([-2,1,-3,4,-1,2,1,-5,4]));