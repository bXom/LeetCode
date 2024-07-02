'use strict';

/**
 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 取出来，判断是否重复，重复舍弃，不重复添加在队尾
var removeDuplicatesSolution1 = (nums) => {
    var size = nums.length;
    for (let i = 0, j = 1; i < size; i++, j++) {
        if (nums[i] == nums[j]) {
            nums[i] = nums[j];
            nums[j] = false;
        }
    }
};

var removeDuplicatesSolution2 = (nums) => {
    if (nums.length == 0) return 0;
    let j = 0;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] != nums[j]) {
            j++;
            nums[j] = nums[i];
        }
    }
    console.log(nums);
    return j + 1;
}

var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicatesSolution2(nums));