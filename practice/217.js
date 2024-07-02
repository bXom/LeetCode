/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let a = [];
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        const e = nums[i];
        if (a[e]) return true;
        a[e] = 1;
    }
    return false;
};
console.log(containsDuplicate([1, 2, 3, 1, 2, 3, 4, 5, 4]));