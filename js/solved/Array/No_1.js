'use strict';
/**
 * NO.1
 * 两数之和
 * 给定一个整数数组 nums 和一个整数目标值 target，
 * 请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const sol1 = (nums, target) => {
    const long = nums.length;
    if (long < 2) return [];
    let arr = [];
    for (let i = 0; i < long; i++) {
        let e = nums[i], another = target - e;
        if (arr[another] >= 0) return [arr[another], i];
        arr[e] = i;
    }
    return [];
};