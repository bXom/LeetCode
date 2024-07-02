/**
 * NO.50
 * 幂运算
 * @param {Number} x
 * @param {Number} n
 */
// 快速幂
// 首先将指数转换为二进制，然后从低位向高位运算，
// 当前项对应的底数为低一位底数的平方
const sol1 = (x, n) => {
    if (n === 0) return 1;
    let positive = n > 0, base = x, result = 1;
    if (!positive) n = -n;
    const binaryStr = parseInt(n).toString(2);
    let long = binaryStr.length - 1;
    for (let index = long; index >= 0; index--) {
        if (binaryStr[index] === '1') result *= base;
        base *= base;
    }
    if (!positive) result = 1 / result;
    return result;
};