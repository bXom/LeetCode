'use strict';
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
// TODO:超时严重
// 扫描字符串，符合条件处理，后再次从头开始扫描
var sol1 = function (s, k) {
    let match = s[0], times = 1;
    for (let i = 1; ;) {
        if (s[i] === match) {
            times++;
            if (times === k) {
                s = s.substring(0, i - k + 1) + s.substring(i + 1, s.length);
                match = s[0];
                times = 1;
                i = 1;
            } else {
                i++;
            }
        } else {
            match = s[i];
            times = 1;
            i++;
        }
        if (i === s.length) break;
    }
    return s;
};
// 开辟数组，在对应位置记录当前字符连续出现第几次
const sol2 = (s, k) => {
    let times = [1];
    for (let i = 1; ;) {
        if (s[i] === s[i - 1]) {
            times[i] = times[i - 1] + 1;
            if (times[i] === k) {
                s = s.substring(0, i - k + 1) + s.substring(i + 1, s.length);
                times.splice(i - k + 1, k);
                i = i - k;
            }
        } else {
            times[i] = 1;
        }
        if (i === s.length - 1) break;
        i++;
    }
    return s;
};
// 栈结构的方法 2
const sol3 = (s, k) => {
    let times = [1];
    for (let i = 1; ;) {
        if (s[i] === s[i - 1]) {
            let top = times.pop();
            times.push(top);
            times.push(top + 1)
            if (top + 1 === k) {
                s = s.substring(0, i - k + 1) + s.substring(i + 1, s.length);
                let j = k;
                while (j > 0) {
                    times.pop();
                    j--
                }
                i = i - k;
            }
        } else {
            times.push(1);
        }
        if (i === s.length - 1) break;
        i++;
    }
    return s;
};
// 将字符串记录在栈中，遍历字符串时，
// 判断与栈顶值是否相同，若相同则一并存储，达到目标次数 k 则出栈，
// 剩下的则为最终结果
const sol4 = (s, k) => {
    let stack = [];
    for (let e of s) {
        let val = stack.pop();
        if (val && val[0] === e) {
            if (val.length !== k - 1) stack.push(val + e);
            continue;
        }
        if (val) stack.push(val);
        stack.push(e);
    }
    return stack.join('');
};
console.log(sol4("deeedbbcccbdaa", 3));