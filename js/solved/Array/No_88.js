'use strict';
/**
 * NO.88
 * 合并两个有序数组
 * 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，
 * 另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
 * 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
 * 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。
 * 为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，
 * 后 n 个元素为 0 ，应忽略。nums2 的长度为 n
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 双指针
 */
const sol1 = (nums1, m, nums2, n) => {
    let aPoint = 0, bPoint = 0;
    let sortedArr = [];
    while (aPoint < m && bPoint < n) {
        if (nums1[aPoint] <= nums2[bPoint]) {
            sortedArr.push(nums1[aPoint]);
            aPoint++;
        } else {
            sortedArr.push(nums2[bPoint]);
            bPoint++;
        }
    }
    while (aPoint < m) {
        sortedArr.push(nums1[aPoint]);
        aPoint++;
    }
    while (bPoint < n) {
        sortedArr.push(nums2[bPoint]);
        bPoint++;
    }
    sortedArr.forEach((e, i) => nums1[i] = e);
    return nums1;
};
/**
 * 逆向双指针
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 */
const sol2 = (nums1, m, nums2, n) => {
    let aPoint = m - 1, bPoint = n - 1;
    let resultPoint = nums1.length - 1;
    while (aPoint >= 0 && bPoint >= 0) {
        if (nums1[aPoint] >= nums2[bPoint]) {
            nums1[resultPoint] = nums1[aPoint];
            nums1[aPoint] = 0;
            aPoint--;
            resultPoint--;
        } else {
            nums1[resultPoint] = nums2[bPoint];
            nums2[bPoint] = 0;
            bPoint--;
            resultPoint--;
        }
    }
    while (aPoint >= 0 && resultPoint >= 0) {
        nums1[resultPoint] = nums1[aPoint];
        aPoint--;
        resultPoint--;
    }
    while (bPoint >= 0 && resultPoint >= 0) {
        nums1[resultPoint] = nums2[bPoint];
        bPoint--;
        resultPoint--;
    }
    return nums1;
};
console.log(sol2([1, 2, 23, 0, 0, 0], 3, [2, 5, 16], 3));