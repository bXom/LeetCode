'use strict';
/**
 * NO.540
 * 有序数组中的单一元素
 * 给定一个只包含整数的有序数组，每个元素都会出现两次，唯有一个数只会出现一次，找出这个数。
 * @param {number[]} nums
 * @return {number}
 * 解题思路：
 * 取中点，判断奇偶。
 * 若偶数则判断与前项是否相等，若相等则在后，若不等则在前
 * 若奇数则判断与后项是否相等，若相等则在后，若不等则在前
 * 注意：数组下标，奇数位序号为偶数
 */
const sol1 = (nums) => {
    let long = nums.length;
    if (long === 1) return nums[0];
    let start = 0, end = long - 1;
    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if (mid % 2 === 0) {
            if (nums[mid] === nums[mid + 1]) {
                start = mid + 2;
            } else {
                if (nums[mid] === nums[mid - 1]) end = mid - 2;
                else return nums[mid];
            }
        } else {
            if (nums[mid] === nums[mid - 1]) {
                start = mid + 1;
            } else {
                if (nums[mid] === nums[mid + 1]) end = mid - 1;
                else return nums[mid];
            }
        }
    }
};
console.log(sol1([1, 1, 2]));