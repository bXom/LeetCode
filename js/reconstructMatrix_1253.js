/**
 * NO.1253
 * 重构 2 行二进制矩阵
 给你一个 2 行 n 列的二进制数组：
 矩阵是一个二进制矩阵，这意味着矩阵中的每个元素不是 0 就是 1。
 第 0 行的元素之和为 upper。
 第 1 行的元素之和为 lower。
 第 i 列（从 0 开始编号）的元素之和为 colsum[i]，colsum 是一个长度为 n 的整数数组。
 你需要利用 upper，lower 和 colsum 来重构这个矩阵，并以二维整数数组的形式返回它。
 如果有多个不同的答案，那么任意一个都可以通过本题。
 如果不存在符合要求的答案，就请返回一个空的二维数组。
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
/**
 * 思路：
 * colsum中
 * 0项在结果的两项中均为0
 * 2项在结果中均为1，
 * 1项的归属，upper与lower中的位置是关键
 */
var reconstructMatrix_solution1 = (upper, lower, colsum) => {
    // 判断成立
    colsum.every(value => {
        value > 2;
        return [];
    });
    // 判断0，1，2项的位置，及合计值
    let sum = 0;
    let arr0 = [];
    let arr1 = [];
    let arr2 = [];
    colsum.forEach((value, index, arr) => {
        sum += value;
        if (value === 1) {
            arr1.push(index);
        } else if (value === 2) {
            arr2.push(index);
        } else {
            arr0.push(index);
        }
    });
    // 合计偏差，返回不成立
    if (sum != (upper + lower)) {
        return [];
    }
    // 统计1的个数
    let arr0Length = arr0.length;
    let arr1Length = arr1.length;
    let arr2Length = arr2.length;
    let oneSum = 0;
    for (let i = 0; i < arr1Length; i++) {
        if (((i + 1 + arr2Length) === upper) && ((arr1Length - i - 1 + arr2Length) === lower)) {
            oneSum = i + 1;
        } else if (oneSum === 0 && i === arr1Length - 1) {
            return [];
        }
    }
    let arr = [[], []];
    // 0项赋值
    for (let j0 = 0; j0 < arr0Length; j0++) {
        arr[0][arr0[j0]] = 0;
        arr[1][arr0[j0]] = 0;
    }
    // 2项赋值
    for (let j2 = 0; j2 < arr2Length; j2++) {
        arr[0][arr2[j2]] = 1;
        arr[1][arr2[j2]] = 1;
    }
    // 1项赋值
    for (let j1 = 0; j1 < arr1Length; j1++) {
        if (oneSum > 0) {
            arr[0][arr1[j1]] = 1;
            arr[1][arr1[j1]] = 0;
            oneSum--;
        } else {
            arr[0][arr1[j1]] = 0;
            arr[1][arr1[j1]] = 1;
        }
    }
    return arr;
};

var reconstructMatrix = (upper, lower, colsum) => {
    // 判断0，1，2项的位置，及合计值
    let sum = 0;
    let arr0 = [];
    let arr1 = [];
    let arr2 = [];
    let colsumLength = colsum.length, arr1Length = 0, arr2Length = 0;
    for (let index = 0; index < colsumLength; index++) {
        let value = colsum[index];
        sum += value;
        // 判断合计、每一项是否有效
        if (value > 2 || sum > (upper + lower)) {
            return [];
        } else if (value === 1) {
            arr1[index] = true;
            arr1Length++;
        } else if (value === 2) {
            arr2[index] = true;
            arr2Length++;
        } else {
            arr0[index] = true;
        }
    }
    // 统计upper层1的个数
    let oneSum = 0;
    for (let i = 0; i < arr1Length; i++) {
        if (((i + 1 + arr2Length) === upper) && ((arr1Length - i - 1 + arr2Length) === lower)) {
            oneSum = i + 1;
            break;
        } else if (oneSum === 0 && i === arr1Length - 1) {
            return [];
        }
    }
    let arr = [[], []];
    for (let j = 0; j < colsumLength; j++) {
        if (arr2[j]) {
            arr[0][j] = 1;
            arr[1][j] = 1;
        } else if (arr0[j]) {
            arr[0][j] = 0;
            arr[1][j] = 0;
        } else if (arr1[j]) {
            if (oneSum-- > 0) {
                arr[0][j] = 1;
                arr[1][j] = 0;
            } else {
                arr[0][j] = 0;
                arr[1][j] = 1;
            }
        }
    }
    return arr;
};
console.log(reconstructMatrix(5, 3, [2, 1, 2, 1, 1, 1, 1, 0, 1, 1, 1]));