/**
 * 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
 * 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
 * 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，
 * nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let tag = nums1.length - 1;
    let flag1 = m - 1;
    let flag2 = n - 1;
    while (tag >= 0) {
        if (flag1 < 0) {
            nums1[tag] = nums2[flag2];
            flag2--;
            tag--;
            continue;
        } else if (flag2 < 0) {
            break;
        }
        console.log(`nums1[flag1]: ${nums1[flag1]}`);
        console.log(`nums2[flag2]: ${nums2[flag2]}`);
        if (nums1[flag1] <= nums2[flag2]) {
            nums1[tag] = nums2[flag2];
            tag--;
            flag2--;
        } else {
            nums1[tag] = nums1[flag1];
            tag--;
            flag1--;
        }
    }
    console.log(nums1);
};
// merge([0], 0, [1], 1);
merge([1,2,3,0,0,0], 3, [2,5,6], 3);