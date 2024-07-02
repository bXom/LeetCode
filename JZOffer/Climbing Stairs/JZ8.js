/**
 * JZ8
 * 跳台阶
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个 n 级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
 */
/**
 * 递归
 * @param {number} n
 * @return {number}
 */
const sol1 = (n) => {
    let memo = [0, 1, 2];
    return calEach(n, memo);
};
const calEach = (n, memo) => {
    // console.log(memo);
    if (memo[n] >= 0) {
        return memo[n];
    } else {
        return calEach(n - 1, memo) + calEach(n - 2, memo);
    }
};
/**
 * 动态规划
 * @param {number} n
 */
const sol2 = (n) => {
    if (n < 3) return n;
    // n-2/n-1/n
    let a = 1, b = 2, c = 0;
    for (let i = 3; i < n + 1; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};
console.log(sol2(45));
/**
 * 解题思路
 * 共 n 级台阶，每步的台阶数为 1 或 2 则步数的范围是: 当 n 为奇数 (n+1)/2 ～ n，当 n 为偶数 n/2 ～ n
 * 所以统计不同步数的可能走法即可，每种步数的可能性可以抽象为不同个数 2 和 1 数组的排列组合。即对应为不同数组的个数即可。
 * @param {number} n
 * @return {number}
 */
const soln = (n) => {
    // 偶数
    let evenNum = true;
    if (n % 2 !== 0) evenNum = false;
};