'use strict';
/**
 * NO.121
 * 买股票的最佳时机
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 * 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。
 * 设计一个算法来计算你所能获取的最大利润。返回你可以从这笔交易中获取的最大利润。
 * 如果你不能获取任何利润，返回 0
 * @param {number[]} prices
 * @return {number}
 */
const sol1 = (prices) => {
    let times = prices.length;
    let buyTime = 0, income = prices[1] - prices[0];
    for (let point = 1; point < times; point++) {
        const amount = prices[point];
        if (amount < prices[buyTime]) buyTime = point;
        else if ((amount - prices[buyTime]) > income) income = amount - prices[buyTime];
    }
    if (income > 0) return income;
    return 0;
};
console.log(sol1([7, 5, 4]));
// 双指针，卖出时间要从数组标识位 1 开始计算