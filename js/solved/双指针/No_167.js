'use strict';
/**
 * NO.167
 * 两数之和II - 输入有序数组
 * 给定一个已按照 非递减顺序排列的整数数组 numbers ，
 * 请你从数组中找出两个数满足相加之和等于目标数 target 。
 * 函数应该以长度为 2 的整数数组的形式返回这两个数的下标值。numbers 的下标 从 1 开始计数，
 * 所以答案数组应当满足 1 <= answer[0] < answer[1] <= numbers.length 。
 * 你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * 二分法 nlogn
 */
const sol1 = (numbers, target) => {
    let long = numbers.length, index = 0;
    while (index < long) {
        let val = numbers[index];
        let miss = target - val;
        if (miss < val) return [];
        let another = bSearch(index + 1, long, numbers, miss);
        if (another !== -1) return [index + 1, another + 1];
        index++;
    }
    return [];
};
const bSearch = (start, end, arr, target) => {
    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] > target) end = mid - 1;
        else start = mid + 1;
    }
    return -1;
};
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * 双指针，两个指针分别只向最大值和最小值，
 * 判断两个指针位之和与目标值大小，来移动指针
 */
const sol2 = (numbers, target) => {
    let long = numbers.length, small = 0, great = long - 1;
    while (small < great) {
        let smallV = numbers[small], greatV = numbers[great];
        if ((smallV + greatV) === target) return [small + 1, great + 1];
        else if ((smallV + greatV) > target) great--;
        else small++;
    }
    return [];
};
console.log(sol2([2, 7, 8, 12, 46], 19));