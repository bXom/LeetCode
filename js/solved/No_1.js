/**
 * NO.1
 * 两数之和
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const sol1 = (nums, target) => {
    const length = nums.length;
    if (length < 2) return [];
    let hub = {};
    let val = target - nums[0];
    hub[nums[0]] = 0;
    for (let index = 1; index < length; index++) {
        // 目标差值
        val = target - nums[index];
        if (typeof (hub[val]) !== 'undefined') {
            return [hub[val], index];
        }
        hub[nums[index]] = index;
    }
    return [];
};
const sol2 = (nums, target) => {
    let a = [];
    let numsLength = nums.length;
    for (let index = 0; index < numsLength; index++) {
        let value = nums[index];
        if (a[value] != undefined) {
            return [index, a[value]];
        }
        a[target - value] = index;
    }
};