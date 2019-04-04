'use strict';

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // solution 1 -------------------
    // s.reverse();
    // ------------------------------

    // solution 2 -------------------
    let size = s.length;
    for(let i = size-2; i >= 0; i--){
        s.push(s[i]);
    }
    for(let i = size-1; i > 0; i--){
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

reverseString(['a','b','c','d','e']);