'use strict';
/**
 * 在升序排列无重复的数据集合中查找给定元素的位置
 * @param nums 升序无重复数据集合
 * @param val 给定值
 * @return index 数据集合中的位置，不存在返回 -1
 */
const equal = (nums, val) => {
    let start = 0, end = nums.length - 1;
    let index = -1;
    while (end >= start) {
        index = parseInt(start + (end - start) / 2);
        if (nums[index] === val) {
            return index;
        } else if (nums[index] > val) {
            end = index - 1;
        } else {
            start = index + 1;
        }
    }
    // if (nums[end] === val) return end;
    return -1;
};
/**
 * 查找第一个等于给定值的元素的位置
 * @param nums 升序数据集合（可能重复）
 * @param val 给定值
 * @return index 数据集合中的位置，不存在返回 -1
 */
const firstEqual = (nums, val) => {
    let start = 0, end = nums.length - 1;
    let index = end + 1;
    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if (nums[mid] > val) {
            end = mid - 1;
        } else if (nums[mid] < val) {
            start = mid + 1;
        } else if (mid < index) {
            index = mid;
            end = mid - 1;
        }
    }
    if (index >= nums.length) return -1;
    return index;
};
/**
 * 查找最后一个等于给定值的元素的位置
 * @param nums 升序数据集合（可能重复）
 * @param val 给定值
 * @return index 数据集合中的位置，不存在返回 -1
 */
const lastEqual = (nums, val) => {
    let start = 0, end = nums.length - 1;
    let index = -1;
    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if (nums[mid] > val) {
            end = mid - 1;
        } else if (nums[mid] < val) {
            start = mid + 1;
        } else if (mid > index) {
            index = mid;
            start = mid + 1;
        }
    }
    if (index >= nums.length) return -1;
    return index;
};
/**
 * 查找第一个大于等于给定值的元素的位置
 * @param nums 升序数据集合（可能重复）
 * @param val 给定值
 * @return index 数据集合中的位置，不存在返回 -1
 */
const firstGreaterOrEqual = (nums, val) => {
    let start = 0, end = nums.length - 1;
    let index = end + 1;
    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if (nums[mid] < val) {
            start = mid + 1;
        } else if (nums[mid] >= val) {
            index = mid;
            end = mid - 1;
        }
    }
    if (index >= nums.length) return -1;
    return index;
};
/**
 * 查找最后一个小于等于给定值的元素的位置
 * @param nums 升序数据集合（可能重复）
 * @param val 给定值
 * @return index 数据集合中的位置，不存在返回 -1
 */
const lastSmallerOrEqual = (nums, val) => {
    let start = 0, end = nums.length - 1;
    let index = -1;
    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if (nums[mid] > val) {
            end = mid - 1;
        } else if (nums[mid] <= val) {
            index = mid;
            start = mid + 1;
        }
    }
    if (index >= nums.length) return -1;
    return index;
};
// console.log(firstEqual([1,1,1,2,2,4], 2));
// console.log(lastEqual([1,1,1,1,1,1,2,2,2,2,4], 2));
// console.log(firstGreaterOrEqual([1,1,2,2,2,2,3,43], 2));
// console.log(lastSmallerOrEqual([3,4], 2));