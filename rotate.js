'use strict'

// rotate选择数组
// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotateSolution1 = (nums, k) => {
    for(let i = 0; i < k; i++){
        let value = [nums.pop()];
        nums = value.concat(nums);
    }
    console.log(nums);
};

var rotateSolution2 = (nums, k) => {
    nums = nums.slice(k + 1).concat(nums.slice(0, nums.length - k));
    console.log(nums);
};

// 空间复杂度 O(1) 
var rotateSolution3 = (nums, k) => {
    let newNums = nums.splice(nums.length - k, k);
    console.log(nums.unshift(...newNums));
    console.log(nums);
};

// 空间复杂度 O(1) 
var rotateSolution4 = (nums, k) => {
    let length = nums.length;
    for(let i = 1; i <= k; i++){
        let temp = nums[length - 1];
        for(let j = length - 1; j >= 0; j--){
            if(j === 0){
                nums[0] = temp;
                break;
            }
            nums[j] = nums[j-1];
        }
    }
    console.log(nums);
};

rotateSolution4([1,2,3,4,5,6,7], 3);