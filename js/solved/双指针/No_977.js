'use strict';
/**
 * NO.977
 * 有序数组的平方
 * 给你一个按非递减顺序排序的整数数组 nums，
 * 返回每个数字的平方组成的新数组，要求也按非递减顺序排序。
 * @param {number[]} nums
 * @return {number[]}
 */
const sol1 = (nums) => {
    let long = nums.length;
    let start = 0, end = long - 1;
    let result = [], index = end;
    while (start <= end) {
        let a = nums[start] * nums[start], b = nums[end] * nums[end];
        if (a >= b) {
            result[index--] = a;
            start++;
        } else {
            result[index--] = b;
            end--;
        }
    }
    return result;
};
console.log(sol1([-4, -3, 0, 1, 2]));