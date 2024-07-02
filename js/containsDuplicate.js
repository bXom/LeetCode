'use strict';
/**
 给定一个整数数组，判断是否存在重复元素。
 如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 遍历比较
var containsDuplicateSolution1 = (nums) => {
    let numLength = nums.length;
    for (let i = 0; i < numLength; i++) {
        for (let j = i + 1; j < numLength; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
            continue;
        }
    }
    return false;
};

// map的key不重复
var containsDuplicateSolution2 = (nums) => {
    const map = {};
    for (const v of nums) {
        if (v in map) {
            console.log(map);
            return true;
        }
        map[v] = true;
    }
    return false;
};

// 先排序，比较临近两个值
var containsDuplicateSolution3 = (nums) => {
    nums.sort();
    let length = nums.length;
    for (let i = 0; i < length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;
};

// Set无重复
var containsDuplicateSolution4 = (nums) => {
    return new Set(nums).size != nums.length;
};

console.log(containsDuplicateSolution4([4, 5, 6, 7, 8, 45, 6, 3, 2]));
console.log(containsDuplicateSolution4([2, 2]));