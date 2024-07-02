'use strict';
/**
 * NO.496
 * 下一个更大元素 I
 * 给你两个 没有重复元素 的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。
 * 请你找出 nums1 中每个元素在 nums2 中的下一个比其大的值。
 * nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出 -1 。
 * 1 <= nums1.length <= nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 104
 * nums1和nums2中所有整数 互不相同
 * nums1 中的所有整数同样出现在 nums2 中
 * 你可以设计一个时间复杂度为 O(nums1.length + nums2.length) 的解决方案吗？
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const sol1 = (nums1, nums2) => {
    let long1 = nums1.length, long2 = nums2.length;
    let search = [], stack = [];
    search[nums2[long2 - 1]] = -1;
    stack.push(nums2[long2 - 1]);
    for (let i = long2 - 2; i >= 0; i--) {
        // 遍历栈值小于当前项则出栈
        let stackV = stack.pop();
        while (stackV < nums2[i] && stack.length > 0) {
            stackV = stack.pop();
        }
        // 找到栈中存在大于前项直接存储哈希表
        if (nums2[i] < stackV) {
            stack.push(stackV, nums2[i]);
            search[nums2[i]] = stackV;
            continue;
        }
        // 未在栈中找到大于当前项的值
        search[nums2[i]] = -1;
        stack.push(nums2[i]);
    }
    for (let j = 0; j < long1; j++) {
        nums1[j] = search[nums1[j]];
    }
    return nums1;
};