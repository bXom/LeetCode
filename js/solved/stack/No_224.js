'use strict';
/**
 * NO.224
 * 简单计算器的实现
 * 输入一串字符串 s ，可能包含数字,'+','-','(',')',' '的字符串，返回计算所得结果
 * @param {string} s
 * @return {number}
 * testing: (1+(4+5+2)-3)+(6+8)
 */
// 如果遇到运算符号或'('则入栈，如果遇到数字则存放内存，判断是否为连续数字再入栈
// 遇到')'则运行出栈计算直到遇到'('
// 最后若栈内还有数值则只剩下不含括号的运算，直接计算即可
var sol1 = function (s) {
    let stack = [], long = s.length, index = 0, num = '';
    while (index < long) {
        switch (s[index]) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                num += s[index];
                break;
            case '(':
                if (num) {
                    stack.push(num);
                    num = '';
                }
                stack.push('(');
                break;
            case ')':
                if (num) {
                    stack.push(num);
                    num = '';
                }
                popCal(stack);
                break;
            case '-':
            case '+':
                if (num) {
                    stack.push(num);
                    num = '';
                }
                stack.push(s[index]);
        }
        index++;
    }
    // 最后一个数字
    if (num) stack.push(num);
    if (stack.length > 1) popCal(stack);
    return stack[0];
};
const popCal = (stack) => {
    let result = 0, val = parseInt(stack.pop()), stackLong = stack.length;
    for (let i = 0; i < stackLong; i++) {
        let sig = stack.pop();
        if (!sig && sig != '0') {
            break;
        } else if (sig === '+') {
            result += val;
            val = 0;
        } else if (sig === '-') {
            result -= val;
            val = 0;
        } else if (sig === '(') {
            stack.push(result + val);
            break;
        } else {
            val = parseInt(sig);
        }
    }
    result += val;
    stack.push(result);
};
// console.log(sol1("(1+(4+5+2)-3)+(6+8)"));
console.log(sol1("(17)-(0)+(4)"));