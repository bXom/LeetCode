'use strict';
/**
 * NO.118
 * 杨辉三角
 * 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
 * 在「杨辉三角」中，每个数是它左上方和右上方的数的和
 * 输入: numRows = 5；输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 * @param {number} numRows
 * @return {number[][]}
 */
const sol1 = (numRows) => {
    if (numRows === 0) return [];
    else if (numRows === 1) return [[1]];
    let result = [[1]], lineIndex = 2;
    while (numRows >= lineIndex) {
        let line = [1], index = 1;
        line[lineIndex - 1] = 1;
        while (index < lineIndex - 1) {
            let sum = result[lineIndex - 2][index - 1] + result[lineIndex - 2][index];
            line[index] = sum;
            index++;
        }
        result.push(line);
        lineIndex++;
    }
    return result;
};
console.log(sol1(5));