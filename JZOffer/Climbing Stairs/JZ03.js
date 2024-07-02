/**
 * JZ03
 * 数组中重复的数字
 * 找出数组中重复的数字。
 * 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
 * 数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
 * 请找出数组中任意一个重复的数字。
 * @param {number[]} nums
 */
// 哈希表/键值对
const sol1 = (nums) => {
    let map = {}, long = nums.length;
    for (let i = 0; i < long; i++) {
        if (map[nums[i]] || map[nums[i]] === 0) return nums[i];
        map[nums[i]] = i;
    }
    return -1;
};
// 原地交换
// 降低空间复杂度
const sol2 = (nums) => {
    let long = nums.length;
    for (let i = 0; i < long;) {
        let e = nums[i];
        if (e === i) {
            i++;
            continue;
        } else if (nums[e] === e) {
            return e;
        }
        nums[i] = nums[e];
        nums[e] = e;
    }
    return -1;
};
console.log(sol2([2, 3, 1, 0, 2, 5, 3]));