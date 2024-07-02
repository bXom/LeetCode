'use strict';
/**
 * 快速排序
 * @param {number[]} arr
 */
// 非原地排序，空间复杂度高，当数据量大的情况下非常消耗内存
const sol1 = (arr) => {
    let divide = arr.pop();
    if (!divide) return [];
    let left = [], right = [];
    for (let i = 0; i < arr.length; i++) {
        const e = arr[i];
        if (e >= divide) right.push(e);
        else left.push(e);
    }
    let leftL = left.length > 1, rightL = right.length > 1;
    if (leftL) left = sol1(left);
    if (rightL) right = sol1(right);
    left.push(divide);
    if (right.length > 0) left = left.concat(right);
    return left;
};
// 原地排序，非稳定排序
const sol2 = (nums) => {
    const sort = (arr, start, end) => {
        // 取最后一项为边界值
        let divide = arr[end];
        // i 指针为当前序列第一个大于边界值的位置
        // j 指针为遍历动态指针
        let i = start, j = start;
        for (; j < end;) {
            let ej = arr[j];
            // - 当 j 指针指向的值不大于边界值
            //   则 j 指针所指位置的值与 i 指针所指位置的值交换
            //   并且指针位置向后移动一
            // - 若大于边界值
            //   则仅 j 指针向后移动，继续遍历
            if (ej <= divide) {
                arr[j] = arr[i];
                arr[i] = ej;
                i++;
            }
            j++;
            // 当 j 指针遍历至最后一项，
            // 此时 i 指向当前队列第一个大于边界值的位置
            // 将 i 指针所指位置的值与边界值交换
            if (j === end) {
                let endNum = arr[i];
                arr[i] = divide;
                arr[end] = endNum;
            }
        }
        console.log(nums);
        console.log(`start:${start}`);
        console.log(`end:${end}`);
        // 小于边界的部分长度大于 1 则继续排序
        if ((i - start) > 1) sort(arr, start, i - 1);
        // 大于边界的部分长度大于 1 则继续排序
        if ((end - i) > 1) sort(arr, i + 1, end);
    };
    sort(nums, 0, nums.length - 1);
    return nums;
};
// console.log((sol2([2, 1])));
// console.log(sol1([8,10,2,3,6]));
console.log(JSON.stringify(sol2([1, 2, 3, 4, 5])));
// console.log(JSON.stringify(sol2([8,10,2,3,6,1,5])));