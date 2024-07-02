'use strict';
/**
 * NO.566
 * 重塑矩阵
 * 在 MATLAB 中，有一个非常有用的函数 reshape ，
 * 它可以将一个 m x n 矩阵重塑为另一个大小不同（r x c）的新矩阵，但保留其原始数据。
 * 给你一个由二维数组 mat 表示的 m x n 矩阵，以及两个正整数 r 和 c ，分别表示想要的重构的矩阵的行数和列数。
 * 重构后的矩阵需要将原始矩阵的所有元素以相同的 行遍历顺序 填充。
 * 如果具有给定参数的 reshape 操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const sol1 = (mat, r, c) => {
    let matR = mat.length, matC = mat[0].length;
    if (matC * matR !== r * c) return mat;
    // 已添加数量
    let nums = 1, resultMatrix = [[]];
    while (nums <= r * c) {
        // 原矩阵位置
        let originR = parseInt((nums - 1) / matC), originC = (nums - 1) % matC;
        console.log(`originR:${originR}, originC:${originC}`);
        // 新矩阵的位置
        let length = parseInt((nums - 1) / c), width = (nums - 1) % c;
        console.log(`length:${length}, width:${width}`);
        // 赋值
        if (!resultMatrix[length]) resultMatrix[length] = [];
        resultMatrix[length][width] = mat[originR][originC];
        nums++;
    }
    return resultMatrix;
};
console.log(sol1([[1, 2], [3, 4]], 4, 1));