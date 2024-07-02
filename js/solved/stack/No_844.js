'use strict';
/**
 * NO.844
 * 比较含退格的字符串
 * 给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，请你判断二者是否相等。# 代表退格字符。
 * 如果相等，返回 true ；否则，返回 false 。
 * 注意：如果对空文本输入退格字符，文本继续为空。
 * 你可以用 O(N) 的时间复杂度和 O(1) 的空间复杂度解决该问题吗？
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const sol1 = (s, t) => {
    let stack = [];
    let sLength = s.length, tLength = t.length;
    let i = 0, j = 0;
    while (i < sLength) {
        if (s[i] !== '#') stack.push(s[i]);
        else stack.pop();
        i++;
    }
    let sStr = '';
    while (stack.length) {
        sStr += stack.pop();
    }
    while (j < tLength) {
        if (t[j] !== '#') stack.push(t[j]);
        else stack.pop();
        j++;
    }
    let tStr = '';
    while (stack.length) {
        tStr += stack.pop();
    }
    return tStr === sStr;
};
console.log(sol1('a##c', '#a#c'));