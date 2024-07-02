'use strict';
/**
 * 归并排序
 * @param {number[]} arr
 */
const sol1 = (arr) => {
    let long = arr.length;
    // 数组长度大于 2 则使用归并排序
    if (long > 2) {
        // 拆分数组为两部分，每部分进行归并后合并
        let half = long / 2;
        let left = arr.slice(0, half);
        let right = arr.slice(half, long);
        left = sol1(left);
        right = sol1(right);
        let mergeR = merge(left, right);
        return mergeR;
        // 长度小于 2 的直接返回
    } else if (long < 2) {
        return arr;
        // 长度为 2 的简单排序返回
    } else {
        if (arr[0] > arr[1]) {
            let tmp = arr[0];
            arr[0] = arr[1];
            arr[1] = tmp;
        }
        return arr;
    }
};
// 合并
const merge = (left, right) => {
    // 结果空间
    let result = [];
    // 两个数组的指针，谁小谁先入队列
    let i = 0, j = 0;
    for (; (i < left.length && j < right.length);) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    // 剩余数组补充进入队列
    if (i < left.length) {
        for (; i < left.length; i++) {
            result.push(left[i]);
        }
    }
    if (j < right.length) {
        for (; j < right.length; j++) {
            result.push(right[j]);
        }
    }
    return result;
};
// console.log(merge([2,10], [8]));
// console.log(JSON.stringify(sol1([8,10,2,3,6,1,5])));