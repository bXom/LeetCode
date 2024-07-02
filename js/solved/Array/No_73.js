'use strict';
/**
 * NO.73
 * 矩阵置零
 * 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
 * 进阶：
 * 一个直观的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
 * 一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
 * 你能想出一个仅使用常量空间的解决方案吗？
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const sol1 = (matrix) => {
    let m = matrix.length, n = matrix[0].length;
    let index = 0, zeroRow = [], zeroLine = [];
    while (index < n * m) {
        let y = parseInt(index / n), x = index % n;
        index++;
        if (matrix[y][x] === 0) {
            // 记录当前行列为 0
            zeroRow.push(y);
            zeroLine.push(x);
        }
    }
    let rowLength = zeroRow.length;
    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < n; j++) {
            matrix[zeroRow[i]][j] = 0;
        }
    }
    let lineLength = zeroLine.length;
    for (let i = 0; i < lineLength; i++) {
        for (let j = 0; j < m; j++) {
            matrix[j][zeroLine[i]] = 0;
        }
    }
    console.log(matrix);
};
/**
 * 不创建额外空间，以 0 行或者 0 列为标记数组
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const sol2 = (matrix) => {
    let heigh = matrix.length, width = matrix[0].length;
    let firstRowFlag = false;
    for (let i = 0; i < width; i++) {
        if (matrix[0][i] === 0) {
            firstRowFlag = true;
        }
        for (let j = 1; j < heigh; j++) {
            if (matrix[j][i] === 0) {
                matrix[j][0] = 0;
                matrix[0][i] = 0;
            }
        }
    }
    for (let i = (heigh - 1); i > 0; i--) {
        for (let j = (width - 1); j >= 0; j--) {
            if (matrix[0][j] === 0 || matrix[i][0] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    if (firstRowFlag) {
        for (let i = 0; i < width; i++) {
            matrix[0][i] = 0;
        }
    }
    // console.log(matrix);
};
sol2([[1, 2, 3, 4], [5, 0, 7, 8], [0, 10, 11, 12], [13, 14, 15, 0]]);