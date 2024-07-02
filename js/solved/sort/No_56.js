'use strict';
/**
 * NO.56
 * 合并区间
 * 以数组 nums 表示若干个区间的集合，其中单个区间为 nums[i] = [starti, endi] 。
 * 请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
 * 默认随机排列，无任何顺序
 * 输入：nums = [[1,3],[2,6],[8,10],[15,18]]；输出：[[1,6],[8,10],[15,18]]
 * 输入：nums = [[1,4],[4,5]]；输出：[[1,5]]
 * @param {number[][]} nums
 * @return {number[][]}
 */
// 先按照前值排序，再相邻合并
const merge = (nums) => {
    let long = nums.length - 1;
    func(nums, 0, long);
    let resultArr = [nums[0]];
    for (let i = 1; i <= long; i++) {
        let e = nums[i], prev = resultArr.pop();
        if (e[0] <= prev[1]) {
            if (e[1] <= prev[1]) prev = [prev[0], prev[1]];
            else prev = [prev[0], e[1]];
            resultArr.push(prev);
        } else {
            resultArr.push(prev);
            resultArr.push(e);
        }
    }
    return resultArr;
};
const func = (nums, start, end) => {
    // 边界值
    let divide = nums[end];
    let i = start, j = start;
    while (j < end) {
        if (nums[j][0] <= divide[0]) {
            let tmp = nums[j];
            nums[j] = nums[i];
            nums[i] = tmp;
            i++;
        }
        // 当 j 指针值无论为什么都要后移一位
        j++;
    }
    // 当 i 指向倒数第二个值说明全都小于边界值
    // 否则 i 指向的值大于边界值，交换
    let endNum = divide;
    if (i !== end) {
        endNum = nums[i];
        nums[i] = divide;
    }
    nums[end] = endNum;
    if ((i - start) > 1) func(nums, start, i - 1);
    if ((end - i) > 1) func(nums, i + 1, end);
};
console.log(merge([[1, 4], [4, 5]]));