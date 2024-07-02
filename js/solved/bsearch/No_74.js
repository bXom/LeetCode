'use strict';
/**
 * NO.74
 * 搜索二纬矩阵
 * 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。
 * 该矩阵具有如下特性：
 * 每行中的整数从左到右按升序排列。
 * 每行的第一个整数大于前一行的最后一个整数。
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
    if (matrix.length < 1) return false;
    if (matrix[0].length < 1) return false;
    let biggerResult = searchMatrixEnd(matrix, target);
    if ((typeof biggerResult) === 'boolean') return biggerResult;
    let searchResult = searchArr(matrix[biggerResult], target);
    return searchResult;
};
const searchMatrixEnd = (arr, target) => {
    let firstLong = arr.length - 1, secondLong = arr[0].length - 1;
    let index = firstLong + 1;
    let start = 0, end = firstLong;
    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        let val = arr[mid][secondLong];
        if (target === val) return true;
        else if (target > val) {
            start = mid + 1;
        } else {
            if (mid <= index) index = mid;
            end = mid - 1;
        }
    }
    if (index === (firstLong + 1)) return false;
    return index;
};
const searchArr = (arr, target) => {
    let long = arr.length;
    let start = 0, end = long - 1;
    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if (arr[mid] === target) return true;
        else if (arr[mid] > target) end = mid - 1;
        else start = mid + 1;
    }
    return false;
};