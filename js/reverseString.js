'use strict';

// reverseString反转字符串
// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    // solution 1 -------------------
    // s.reverse();
    // ------------------------------

    // solution 2 -------------------
    let size = s.length;
    for (let i = size - 2; i >= 0; i--) {
        s.push(s[i]);
    }
    for (let i = size - 1; i > 0; i--) {
        s.shift();
    }
    // ------------------------------

    // solution 3 -------------------
    // let times = s.length;
    // for(let i = times; i >= times/2; i--){
    //     swap(s, times-i, i-1, sOutput => {
    //         console.log(i, sOutput);
    //     });
    // }
    // ------------------------------
    console.log(s);
};

let swap = (s, a, b, callback) => {
    let temp = s[a];
    s[a] = s[b];
    s[b] = temp;
    callback(s);
};

reverseString(['a', 'b', 'c', 'd', 'e']);