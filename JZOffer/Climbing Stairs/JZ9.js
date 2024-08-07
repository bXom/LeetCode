/**
 * JZ9
 * 跳台阶扩展
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶(n为正整数)总共有多少种跳法。
 * @param {number} n
 */
/**
 * 2^(n-1)
 */
const sol1 = (n) => {
    return Math.pow(2, n - 1);
};
console.log(30);