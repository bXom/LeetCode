/**
 * NO.20
 * 有效的括号
 * https://leetcode-cn.com/problems/valid-parentheses/
 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 有效字符串需满足：
 左括号必须用相同类型的右括号闭合。
 左括号必须以正确的顺序闭合。
 注意空字符串可被认为是有效字符串。
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // 去除空格
    s = s.split(' ').join('');
    let sLength = s.length;
    // 判断长度问题
    if (sLength === 0) {
        return true
    }
    if (sLength % 2 != 0) {
        return false;
    }
    // 堆栈思想
    let arr = [];
    for (let i = 0; i < sLength; i++) {
        // 正括号添加入栈
        if (s.substr(i, 1) === '(' || s.substr(i, 1) === '[' || s.substr(i, 1) === '{') {
            arr.push(s.substr(i, 1));
        } else {
            // 判断反括号与pop出栈的值是否匹配
            let popValue = arr.pop();
            if ((s.substr(i, 1) === ')' && popValue != '(') ||
                (s.substr(i, 1) === ']' && popValue != '[') ||
                (s.substr(i, 1) === '}' && popValue != '{')) {
                return false;
            }
        }
        // 判断栈的长度大于字符串一半
        if (arr.length > sLength / 2) {
            return false;
        }
    }
    // 判断最终得到的栈的长度
    if (arr.length > 0) {
        return false;
    }
    return true;
};
console.log(isValid(' (()('));