/**
 * NO.77
 * 组合
 * 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
 * 你可以按 任何顺序 返回答案。
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const sol1 = (n, k) => {
    if (k > n) return [];
    let returnArr = [];
    for (let i = 1; i <= n; i++) {
        let ele = [i];
        while (ele.length < k) {
            if (!pushValue(ele, n, k)) {

            }
        }
    }
};
/**
 *
 * @param {number[]} ele
 * @param {number} n
 * @param {number} k
 */
const pushValue = (ele, n, k) => {
    let long = ele.length, last = ele.pop();
    console.log(ele);
    if (k - long > n - last) return null;
    ele.push(last);
    ele.push(last + 1);
};
pushValue([1, 2, 3], 8, 4);