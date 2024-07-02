/**
 * NO.14
 * 最长公共前缀
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 * @param {string[]} strs
 * @return {string}
 */
const sol1 = (strs) => {
    let share = '';
    if (strs.length === 1) return strs[0];
    strs.reduce((pre, cur, index) => {
        let preLength = pre.length, curLength = cur.length, shareLength = 0, shareStr = '';
        if (preLength <= curLength) shareLength = preLength;
        else shareLength = curLength;
        for (let index = 0; index < shareLength; index++) {
            if (pre[index] === cur[index]) shareStr += pre[index];
            else break;
        }
        if (index === strs.length - 1) share = shareStr;
        return shareStr;
    });
    return share;
};
console.log(sol1(['a']));