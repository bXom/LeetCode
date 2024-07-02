'use strict';
/**
 * NO.242
 * 有效的字母异位词
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const sol1 = (s, t) => {
    let sLong = s.length, tLong = t.length;
    if (sLong !== tLong) return false;
    let sList = {};
    for (let i = 0; i < sLong; i++) {
        const se = s[i], te = t[i];
        if (sList[se] !== undefined) sList[se]++;
        else sList[se] = 1;
        if (sList[te] !== undefined) sList[te]--;
        else sList[te] = -1;
    }
    for (const val in sList) {
        if (sList[val] !== 0) return false;
    }
    return true;
};
console.log(sol1('cat', 'tac'));