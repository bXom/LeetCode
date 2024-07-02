/**
 * NO.9
 * 回文数
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。
 * @param {number} x
 * @return {boolean}
 */
const sol1 = (x) => {
    if (x % 10 === 0 && x / 10 > 0) return false;
    // true 为奇数
    let positive = true;
    let numsLength = x.toString().length
    if (numsLength % 2 === 0) positive = false;
    let backNum = 0;
    while (x > backNum) {
        backNum = backNum * 10 + x % 10;
        x = parseInt(x / 10);
    }
    if (backNum > x) return (parseInt(backNum / 10) === x);
    return true;
};
// console.log(sol1(12221));