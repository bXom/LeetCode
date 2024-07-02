'use strict';
/**
 * NO.20
 * 有效的括号
 * @param {string} s
 */
const sol1 = (s) => {
    let index = 0, long = s.length;
    let stack = [];
    const check = (str) => {
        let out = '';
        switch (str) {
            case '{':
                stack.push(s[index]);
                return true;
                break;
            case '[':
                stack.push(s[index]);
                return true;
                break;
            case '(':
                stack.push(s[index]);
                return true;
                break;
            case ')':
                out = stack.pop();
                if (out === '(') return true;
                else return false;
                break;
            case '}':
                out = stack.pop();
                if (out === '{') return true;
                else return false;
                break;
            case ']':
                out = stack.pop();
                if (out === '[') return true;
                else return false;
                break;
            default:
                return false;
        }
    };
    while (index < long) {
        if (check(s[index])) index++;
        else return false;
    }
    if (stack.length === 0) return true;
    return false;
};