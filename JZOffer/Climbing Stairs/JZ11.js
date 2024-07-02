/**
 * JZ11
 * 旋转数组的最小数字
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 * 输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。
 * 例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。
 * @param {number[]} nums
 */
// 二分法
const sol1 = (nums) => {
    let left = 0, right = nums.length - 1, mid = parseInt(right / 2);
    while (left !== right && left !== mid) {
        mid = left + parseInt((right - left) / 2);
        let midNum = nums[mid];
        if (midNum > nums[right]) left = mid;
        else if (midNum < nums[left]) right = mid;
        else right--;
    }
    if (nums[left] < nums[right]) return nums[left];
    return nums[right];
};
console.log(sol1([2, 2, 2, 0, 1]));
// // 顺序
// if (midNum > nums[left] && midNum < nums[right]) {
//     return nums[left];
// }
// // 在右侧
// if (midNum >= nums[right]) {
//     left = mid;
//     mid += parseInt((right - mid) / 2);
//     continue;
// }
// // 在左侧
// if (midNum <= nums[left]) {
//     right = mid;
//     mid -= parseInt((right - mid) / 2);
//     continue;
// }
// // 不确定
// if (midNum === nums[left] && midNum === nums[right]) {
//     right--;
//     left++;
//     continue;
// }