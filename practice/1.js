/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值 target 的那两个整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。你可以按任意顺序返回答案。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let addArr = [];
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        const e = nums[i];
        if (addArr[e]) return [addArr[e] - 1, i];
        addArr[target - e] = i + 1;
    }
    ;
    return;
};
console.log(twoSum([2, 3, 2], 4));