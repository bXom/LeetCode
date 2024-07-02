/**
 * NO.4
 * 寻找两个有序数组的中位数
 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 你可以假设 nums1 和 nums2 不会同时为空。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays_solution1 = (nums1, nums2) => {
    let nums = nums1.concat(nums2);
    nums = nums.sort((a, b) => {
        return b - a;
    });
    if (nums.length === 0) {
        return 0;
    } else if (nums.length % 2 === 0) {
        return (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2;
    } else {
        return nums[(nums.length + 1) / 2 - 1];
    }
};
/**
 * 轮询比较大小，将值存放在left与right中。
 * 奇数个数字时，取中间一个值；偶数时，取中间两个值取平均。
 * 可避免两个数组拼接后数组溢出
 * @param {array} nums1
 * @param {array} nums2
 */
var findMedianSortedArrays_solution2 = (nums1, nums2) => {
    let nums1Length = nums1.length;
    let nums2Length = nums2.length;
    let numsLength = nums1Length + nums2Length;
    let nums1Start = 0, nums2Start = 0, single = true;
    ;
    let left = 0, right = 0;
    if (numsLength % 2 === 0) {
        single = false;
    }
    let limit = 0;
    if (single) {
        limit = (numsLength + 1) / 2;
    } else {
        limit = numsLength / 2 + 1;
    }
    for (let i = 0; i < limit; i++) {
        left = right;
        if (nums1Start < nums1Length && (nums2Start === nums2Length || nums1[nums1Start] <= nums2[nums2Start])) {
            right = nums1[nums1Start++];
        } else if (nums2Start < nums2Length && (nums1[nums1Start] > nums2[nums2Start] || nums1Start === nums1Length)) {
            right = nums2[nums2Start++];
        }
    }
    if (single) {
        return right;
    } else {
        return (left + right) / 2.0;
    }
};
const findMedianSortedArrays_solution3 = (nums1, nums2) => {
    let nums1Length = nums1.length;
    let nums2Length = nums2.length;
    // let numsLength = nums1Length + nums2Length;
    let single = true;
    if ((nums1Length + nums2Length) % 2 === 0) single = false;
    if (single) {
        let middle1 = Math.ceil(nums1Length / 2);
        let middle2 = Math.ceil(nums2Length / 2);
    }

};
console.log(findMedianSortedArrays_solution3([1, 2], [3, 4]));