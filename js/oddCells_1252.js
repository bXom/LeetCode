'use strict';
/**
 * NO.1252
 * 奇数值单元格的数目
 给你一个 n 行 m 列的矩阵，最开始的时候，每个单元格中的值都是 0。
 另有一个索引数组 indices，indices[i] = [ri, ci] 中的 ri 和 ci 分别表示指定的行和列（从 0 开始编号）。
 你需要将每对 [ri, ci] 指定的行和列上的所有单元格的值加 1。
 请你在执行完所有 indices 指定的增量操作后，返回矩阵中 「奇数值单元格」 的数目。
 * @param {number} n 行
 * @param {number} m 列
 * @param {number[][]} indices 索引
 * @return {number}
 */
const oddCells_solution1 = (n, m, indices) => {
    let arrN = [];
    for (let i = 0; i < n; i++) {
        let arrM = [];
        for (let j = 0; j < m; j++) {
            arrM.push(0);
        }
        arrN.push(arrM);
    }
    for (let k = 0; k < indices.length; k++) {
        for (let k1 = 0; k1 < m; k1++) {
            arrN[indices[k][0]][k1] += 1;
        }
        for (let k2 = 0; k2 < n; k2++) {
            arrN[k2][indices[k][1]] += 1;
        }
    }
    let sum = 0;
    for (let arr1 = 0; arr1 < n; arr1++) {
        for (let arr2 = 0; arr2 < m; arr2++) {
            if (!(arrN[arr1][arr2] % 2 === 0)) {
                sum++;
            }
        }
    }
    return sum;
};

const oddCells_solition2 = (n, m, indices) => {
    let sumJSON = {};
    let indicesLength = indices.length;
    for (let i = 0; i < indicesLength; i++) {
        for (let i1 = 0; i1 < m; i1++) {
            if (`${indices[i][0]}@${i1}` in sumJSON) {
                sumJSON[`${indices[i][0]}@${i1}`] += 1;
            } else {
                sumJSON[`${indices[i][0]}@${i1}`] = 1;
            }
        }
        for (let i2 = 0; i2 < n; i2++) {
            if (`${i2}@${indices[i][1]}` in sumJSON) {
                sumJSON[`${i2}@${indices[i][1]}`] += 1;
            } else {
                sumJSON[`${i2}@${indices[i][1]}`] = 1;
            }
        }
    }
    let sum = 0;
    for (let value in sumJSON) {
        if (!(sumJSON[value] % 2 === 0)) {
            sum++;
        }
    }
    return sum;
};

const oddCells = (n, m, indices) => {
    let sumJSON = {};
    let indicesLength = indices.length;
    for (let i = 0; i < indicesLength; i++) {
        for (let i1 = 0; i1 < m; i1++) {
            if (`${indices[i][0]}@${i1}` in sumJSON) {
                sumJSON[`${indices[i][0]}@${i1}`] = !sumJSON[`${indices[i][0]}@${i1}`];
            } else {
                sumJSON[`${indices[i][0]}@${i1}`] = true;
            }
        }
        for (let i2 = 0; i2 < n; i2++) {
            if (`${i2}@${indices[i][1]}` in sumJSON) {
                sumJSON[`${i2}@${indices[i][1]}`] = !sumJSON[`${i2}@${indices[i][1]}`];
            } else {
                sumJSON[`${i2}@${indices[i][1]}`] = true;
            }
        }
    }
    let sum = 0;
    for (let value in sumJSON) {
        if (sumJSON[value]) {
            sum++;
        }
    }
    return sum;
};

// console.log(oddCells(2,2, [[1,1],[0,0]]));
console.log('sum:', oddCells(28, 38, [[17, 16], [26, 31], [19, 12], [22, 24], [17, 28], [23, 21], [27, 32], [23, 27], [23, 33], [18, 7], [4, 20], [0, 31], [25, 33], [5, 22]]));