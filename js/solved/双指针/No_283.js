'use strict';
/**
 * NO.283
 * 移动零
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 双指针，记录 0 的位置
 */
const sol1 = (nums) => {
    let long = nums.length;
    let point = [], notPoint = 0;
    while (notPoint < long) {
        if (nums[notPoint] === 0) {
            point.push(notPoint);
        } else if (point.length !== 0) {
            let index = point.shift();
            let mid = nums[index];
            nums[index] = nums[notPoint];
            nums[notPoint] = mid;
            point.push(notPoint);
        }
        notPoint++;
    }
    console.log(nums);
};
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 双指针，不停向前移动非零值，最后补0
 */
const sol2 = (nums) => {
    let long = nums.length;
    let point = 0, notPoint = 0, sum0 = 0;
    while (notPoint < long) {
        if (nums[notPoint] !== 0) {
            nums[point] = nums[notPoint];
            point++;
        } else {
            sum0++;
        }
        notPoint++;
    }
    while (sum0 > 0) {
        nums[long - sum0] = 0;
        sum0--;
    }
    console.log(nums);
};
sol1([0, 1, 0, 12, 2, 4, 6]);