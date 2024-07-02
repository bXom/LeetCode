/**
 * JZ05
 * 替换空格
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
    let index = 0, times = 1, long = s.length;
    let strArr = [], str = '';
    for (let i = 0; i < long; i++) {
        if (s[i] === ' ') {
            times++;
            strArr.push(s.substring(index, i));
            index = i + 1;
        }
    }
    strArr.push(s.substring(index, long));
    str = strArr[0];
    for (let j = 1; j < times; j++) {
        str += '%20' + strArr[j];
    }
    return str;
};
// TODO:
/**
 * 合并两个有序数组，得到一个有序数组
 * @param {number[]} arr1
 * @param {number[]} arr2
 */
const attach = (arr1, arr2) => {

};