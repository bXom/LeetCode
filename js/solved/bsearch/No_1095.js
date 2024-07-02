'use strict';
/**
 * NO.1095
 * 山脉数组中查找目标值（这是一个 交互式问题）
 * 给你一个 山脉数组 mountainArr，请你返回能够使得 mountainArr.get(index) 等于 target 最小 的下标 index 值。
 * 如果不存在这样的下标 index，就请返回 -1。
 * 何为山脉数组？如果数组 A 是一个山脉数组的话，那它满足如下条件：
 * 首先，A.length >= 3
 * 其次，在 0 < i < A.length - 1 条件下，存在 i 使得：
 * A[0] < A[1] < ... A[i-1] < A[i]
 * A[i] > A[i+1] > ... > A[A.length - 1]
 * 你将不能直接访问该山脉数组，必须通过 MountainArray 接口来获取数据：
 * MountainArray.get(k) - 会返回数组中索引为k 的元素（下标从 0 开始）
 * MountainArray.length() - 会返回该数组的长度
 *  * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 * 解题思路：先找到山顶，然后先二分法左侧，如果不存在再二分法右侧
 */
const sol1 = (target, mountainArr) => {
    let long = mountainArr.length();
    let start = 0, end = long - 1;
    let top = 0;
    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if (mountainArr.get(mid) > mountainArr.get(mid + 1)) {
            if (mountainArr.get(mid) > mountainArr.get(mid - 1)) {
                top = mid;
                break;
            } else {
                end = mid - 1;
            }
        } else {
            start = mid + 1;
        }
    }
    start = 0;
    end = top;
    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if (target === mountainArr.get(mid)) {
            return mid;
        } else if (target > mountainArr.get(mid)) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    start = top;
    end = long - 1;
    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if (target === mountainArr.get(mid)) {
            return mid;
        } else if (target > mountainArr.get(mid)) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
};
/**
 * 解题思路：先找到山顶，然后先二分法左侧，如果不存在再二分法右侧
 * @param {number} target
 * @param {[]} mountainArr
 * @return {number}
 */
const sol2 = (target, mountainArr) => {
    let long = mountainArr.length;
    let start = 0, end = long - 1;
    let top = 0;
    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if (mountainArr[mid] > mountainArr[mid + 1]) {
            if (mountainArr[mid] > mountainArr[mid - 1]) {
                top = mid;
                break;
            } else {
                end = mid - 1;
            }
        } else {
            start = mid + 1;
        }
    }
    console.log(top);
    start = 0;
    end = top;
    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if (target === mountainArr[mid]) {
            return mid;
        } else if (target > mountainArr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    start = top;
    end = long - 1;
    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if (target === mountainArr[mid]) {
            return mid;
        } else if (target > mountainArr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
};
console.log(sol2(4, [1, 2, 4]));