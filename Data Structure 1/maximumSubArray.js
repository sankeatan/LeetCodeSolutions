/**
 * 53. Maximum Subarray 
 * 
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * 
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let largest = nums[0];
    let potential = nums[0];
    let k = 1;
    if(nums.length == 1){
        return nums[0];
    }
    while (k<nums.length){
        potential=Math.max(potential+nums[k], nums[k]);
        largest=Math.max(largest, potential);
        k++;
        }
    return largest;
}