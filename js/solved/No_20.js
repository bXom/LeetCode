/**
 * NO.20
 * 有效的括号
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * @param {string} s
 * @return {boolean}
 */
const sol1 = (s) => {
    let strArr = s.split('');
    console.log(strArr);
    let cacheArr = [];
    let right = true;
    strArr.forEach(e => {
        if (e === '(' || e === '[' || e === '{') {
            cacheArr.push(e);
        } else if (e === ')' && cacheArr[cacheArr.length - 1] === '(') {
            cacheArr.pop();
        } else if (e === ']' && cacheArr[cacheArr.length - 1] === '[') {
            cacheArr.pop();
        } else if (e === '}' && cacheArr[cacheArr.length - 1] === '{') {
            cacheArr.pop();
        } else {
            right = false;
        }
    });
    return (right && cacheArr.length === 0);
};