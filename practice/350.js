/**
 * 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。
 * 返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致
 * （如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let times = [];
    nums1.forEach(e => {
        if(times[e]) times[e]++;
        else times[e] = 1;
    });
    let returnArr = [];
    nums2.forEach(e => {
        if (times[e] > 0) {
            times[e]--;
            returnArr.push(e);
        }
    });
    return returnArr;
};
console.log(intersect([4,9,5],[9,4,9,8,4]));