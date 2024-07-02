'use strict';
/**
 * NO.528
 * 按权重随机选择
 * 给你一个下标从 0 开始 的正整数数组 w ，其中 w[i] 代表第 i 个下标的权重。
 * 请你实现一个函数 pickIndex ，
 * 它可以随机地从范围 [0, w.length - 1] 内（含 0 和 w.length - 1）选出并返回一个下标。
 * 选取下标 i 的 概率 为 w[i] / sum(w) 。
 * 例如，对于 w = [1, 3]，挑选下标 0 的概率为 1 / (1 + 3) = 0.25 （即，25%），
 * 而选取下标 1 的概率为 3 / (1 + 3) = 0.75（即，75%）。
 * @param {number[]} w
 */
var Solution = function (w) {
    this.total = 0;
    w.forEach(e => this.total += e);
    return this;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {

};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */