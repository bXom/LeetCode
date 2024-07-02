'use strict';
/**
 * NO.69
 * Sqrt(x)
 * 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
 * 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
 * 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。
 * @param {number} x
 * @returns {number}
 */
const sol1 = (x) => {
    let start = 0, end = x;
    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        let val = mid * mid, valPlus = (mid + 1) * (mid + 1);
        // if (val === x) {
        //     return mid;
        // } else if (val < x) {
        //     if (valPlus > x) return mid;
        //     else if (valPlus === x) return mid + 1;
        //     else start = mid + 1;
        // } else {
        //     end = mid - 1;
        // }
        if (val > x) {
            end = mid - 1;
        } else if (val <= x && valPlus > x) {
            return mid;
        } else {
            start = mid + 1;
        }
    }
};