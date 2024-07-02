'use strict';
/**
 * NO.240
 * 搜索二维矩阵II
 * 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。
 * 该矩阵具有以下特性：每行的元素从左到右升序排列。每列的元素从上到下升序排列。
 * 输入：
 * matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
 * target = 5
 * 输出：true
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 解题思路：从四个方向不停的缩小行列的范围锁定 target 的位置。
 */
const sol1 = (matrix, target) => {
    let range = {
        up: 0,
        down: matrix.length - 1,
        left: 0,
        right: matrix[0].length - 1
    };
    let result = false, upDown = true;
    while (!result) {
        result = cutRange(matrix, range, upDown, target);
        if (typeof result === 'boolean') return result;
        else result = false;
        if (range.up === range.down && range.left === range.right && range.left === range.down) return false;
        upDown = !upDown;
    }
    return false;
};
/**
 * 剪裁边界
 * @param {[][]]} matrix 矩阵
 * @param {object} range 边界范围
 * @param {boolean} upDown true 为处理上下边界 / false 为处理左右边界
 */
const cutRange = (matrix, range, upDown, target) => {
    let start = -1, end = -1;
    if (upDown) {
        // 上
        console.log(`--------上-------`);
        console.log(`matrix: ${matrix}`);
        console.log(`range: ${JSON.stringify(range)}`);
        start = range.up;
        end = range.down;
        let indexUp = end + 1;
        while (start <= end) {
            let mid = parseInt(start + (end - start) / 2);
            console.log(`start: ${start}`);
            console.log(`end: ${end}`);
            console.log(`mid: ${mid}`);
            if (target === matrix[mid][range.right]) {
                return true;
            } else if (target > matrix[mid][range.right]) {
                start = mid + 1;
            } else {
                indexUp = mid;
                end = mid - 1;
            }
        }
        console.log(`indexUp: ${indexUp}`);
        if (indexUp > range.down) return false;
        else range.up = indexUp;
        // 下
        console.log(`--------下-------`);
        console.log(`matrix: ${matrix}`);
        console.log(`range: ${JSON.stringify(range)}`);
        start = range.up;
        end = range.down;
        let indexDown = start - 1;
        while (start <= end) {
            let mid = parseInt(start + (end - start) / 2);
            console.log(`start: ${start}`);
            console.log(`end: ${end}`);
            console.log(`mid: ${mid}`);
            if (target === matrix[mid][range.left]) {
                return true;
            } else if (target < matrix[mid][range.left]) {
                end = mid - 1;
            } else {
                indexDown = mid;
                start = mid + 1;
            }
        }
        console.log(`indexDown: ${indexDown}`);
        if (indexDown < range.up) return false;
        else range.down = indexDown;
    } else {
        // 左
        console.log(`--------左-------`);
        console.log(`matrix: ${matrix}`);
        console.log(`range: ${JSON.stringify(range)}`);
        start = range.left;
        end = range.right;
        let indexLeft = end + 1;
        while (start <= end) {
            let mid = parseInt(start + (end - start) / 2);
            console.log(`start: ${start}`);
            console.log(`end: ${end}`);
            console.log(`mid: ${mid}`);
            if (target === matrix[range.down][mid]) {
                return true;
            } else if (target > matrix[range.down][mid]) {
                start = mid + 1;
            } else {
                indexLeft = mid;
                end = mid - 1;
            }
        }
        console.log(`indexLeft: ${indexLeft}`);
        if (indexLeft > range.right) return false;
        else range.left = indexLeft;
        // 右
        console.log(`--------右-------`);
        console.log(`matrix: ${matrix}`);
        console.log(`range: ${JSON.stringify(range)}`);
        start = range.left;
        end = range.right;
        let indexRight = start - 1;
        while (start <= end) {
            let mid = parseInt(start + (end - start) / 2);
            console.log(`start: ${start}`);
            console.log(`end: ${end}`);
            console.log(`mid: ${mid}`);
            if (target === matrix[range.up][mid]) {
                return true;
            } else if (target < matrix[range.up][mid]) {
                end = mid - 1;
            } else {
                indexRight = mid;
                start = mid + 1;
            }
        }
        console.log(`indexRight: ${indexRight}`);
        if (indexRight > range.right) return false;
        else range.right = indexRight;
    }
    console.log(`end range: ${JSON.stringify(range)}`);
    return 'continue';
};