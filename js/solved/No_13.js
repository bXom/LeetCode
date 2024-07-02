/**
 * NO.13
 * 罗马数字转十进制整数
 * 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
 字符          数值
 I             1
 V             5
 X             10
 L             50
 C             100
 D             500
 M             1000
 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。
 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：
 I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
 X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
 C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。
 * @param {string} s
 * @return {number}
 */
const sol1 = (s) => {
    let strArr = s.toUpperCase().split('');
    let sum = solveRome1(strArr[0]);
    strArr.reduce((pre, cur) => {
        let preV = solveRome1(pre), curV = solveRome1(cur);
        if (preV < curV) sum = (sum - preV + (curV - preV));
        else sum += curV;
        return cur;
    });
    return sum;
};
const solveRome1 = (s) => {
    let val = 0;
    switch (s) {
        case 'I':
            val = 1;
            break;
        case 'V':
            val = 5;
            break;
        case 'X':
            val = 10;
            break;
        case 'L':
            val = 50;
            break;
        case 'C':
            val = 100;
            break;
        case 'D':
            val = 500;
            break;
        case 'M':
            val = 1000;
            break;
    }
    return val;
};
const sol2 = (s) => {
    let strArr = s.toUpperCase().split('');
    let sum = solveRome2(strArr[0]);
    strArr.reduce((pre, cur) => {
        let preV = solveRome2(pre), curV = solveRome2(cur);
        if (preV < curV) sum = (sum - preV + (curV - preV));
        else sum += curV;
        return cur;
    });
    return sum;
};
const solveRome2 = (rome) => {
    let map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    if (map[rome]) return map[rome];
    return 0;
};
// console.log(sol2('LVIII'));