/**
Given a sorted array nums, remove the duplicates in-place such that each 
element appear only once and return the new length.
Do not allocate extra space for another array, you must do this by 
modifying the input array in-place with O(1) extra memory.
 */

var nums = [0,1,1,1,2,3,3,2];
console.log(removeDuplicates(nums));
console.log(nums);

function removeDuplicates(nums) {
    var size = nums.length; 
    for (var i = 0;i < size;i++){
        if(nums.length<=1){
            break;
        }else {
            var a1 = nums.shift();
            for(var j = 0,sizeAfter = nums.length;j < sizeAfter;j++){
                if(a1 === nums[j]){
                    break;
                } else if(j == sizeAfter-1){
                    nums.push(a1);
                }
            }
        }
    }
    return nums.length;
};