/**
 * JZ7
 * 斐波那契数列
 * @param {number} n
 * @returns
 */
const sol1 = (n) => {
    if (n < 2) return n;
    let a = 1, b = 1, c = 1;
    for (let i = 2; i < n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};