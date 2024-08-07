'use strict';
/**
 * NO.278
 * 第一个错误的版本
 * 你是产品经理，目前正在带领一个团队开发新的产品。
 * 不幸的是，你的产品的最新版本没有通过质量检测。
 * 由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。
 * 假设你有 n 个版本 [1, 2, ..., n]，你想找出导致之后所有版本出错的第一个错误的版本。
 * 你可以通过调用 bool isBadVersion(version) 接口来判断版本号 version 是否在单元测试中出错。
 * 实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 * @param {function} isBadVersion()
 * @return {function}
 */
const sol1 = (isBadVersion) => {
    const findFunc = (long) => {
        let start = 1, end = long;
        let index = long + 1;
        while (start <= end) {
            let mid = parseInt(start + (end - start) / 2);
            if (isBadVersion(mid)) {
                if (mid < index) index = mid;
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        if (index === long + 1) return -1;
        return index;
    };
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        return findFunc(n);
    };
};