/**
 * NO.7
 * 整数反转
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 * 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 * @param {*} x
 */
const sol1 = (x) => {
    let positive = true;
    if (x < 0) {
        positive = false;
        x = -x;
    }
    let limit = Math.pow(2, 31);
    let terminalX = 0;
    while (x > 0) {
        if ((terminalX > parseInt(limit / 10)) ||
            (positive && (terminalX === parseInt(limit / 10)) && (x > ((limit % 10) - 1))) ||
            (!positive && (terminalX === parseInt(limit / 10)) && (x > ((limit % 10))))) return 0;
        terminalX = 10 * terminalX + (x % 10);
        x = parseInt(x / 10);
    }
    if (positive) return terminalX;
    return -terminalX;
};
// console.log(sol1(8463847412))