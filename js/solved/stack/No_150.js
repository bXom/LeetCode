'use strict';
/**
 * NO.150
 * 逆波兰表达式求值
 * 根据 逆波兰表示法，求表达式的值。
 * 有效的算符包括 +、-、*、/ 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。
 * 说明：
 * 整数除法只保留整数部分。
 * 给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
 * 示例 1：
 * 输入：tokens = ["2","1","+","3","*"]
 * 输出：9
 * 解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
 *
 * @param {string[]} tokens
 * @return {number}
 */
const sol1 = (tokens) => {
    let i = 0;
    let stack = new Array(Math.floor((tokens.length + 1) / 2)).fill(0);
    while (i < tokens.length) {
        let a = 0, b = 0;
        switch (tokens[i]) {
            case '+':
                b = stack.pop(), a = stack.pop();
                stack.push(a + b);
                break;
            case '-':
                b = stack.pop(), a = stack.pop();
                stack.push(a - b);
                break;
            case '*':
                b = stack.pop(), a = stack.pop();
                stack.push(a * b);
                break;
            case '/':
                b = stack.pop(), a = stack.pop();
                stack.push(parseInt(a / b));
                break;
            default:
                stack.push(parseInt(tokens[i]));
                break;
        }
        i++;
    }
    return stack.pop();
};
// console.log(sol1(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));