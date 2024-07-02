'use strict';
var reverse = (x) => {
    let IntegerMAX_VALUE = Math.pow(2, 31) - 1;
    if (Math.abs(x) > Math.pow(2, 31) - 1) {
        return 0;
    }
    let positiveNum = x < 0;
    if (positiveNum) {
        x = Math.abs(x);
    }
    let numsArr = x.toString().split('');
    let size = numsArr.length;
    let finalX = 0;
    for (let i = 0; i < size; i++) {
        finalX += Math.pow(10, i) * numsArr[i];
    }
    if (positiveNum) {
        finalX = -finalX;
    }
    if (Math.abs(finalX) > Math.pow(2, 31) - 1) {
        return 0;
    }
    return finalX;
};
console.log(reverse(1021));