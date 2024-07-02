'use strict';
/**
 * NO.189
 * 轮转数组
 * 给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sol1 = (nums, k) => {
    let long = nums.length;
    k = k % long;
    long = long - 1;
    let head = [];
    let i = long, j = k;
    while (j > 0) {
        head[j - 1] = nums[i];
        i--;
        j--;
    }
    while (long >= k) {
        nums[long] = nums[long - k];
        long--;
    }
    while (--k >= 0) {
        nums[k] = head[k];
    }
};