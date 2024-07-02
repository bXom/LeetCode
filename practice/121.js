/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let max = 0;
    prices.forEach(e => {
        let miss = e - min;
        if (max < miss) max = miss;
        if (miss < 0) min = e;
    });
    return max;
};
console.log(maxProfit([3,7,2,4,10]));