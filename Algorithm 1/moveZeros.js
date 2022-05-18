/**
 * 283. Move Zeros
 * 
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let count = 0;
    let k = 0;
    while(k<nums.length-count){
        if (nums[k]==0){
            count++;
            nums.push(nums.splice(k, 1));
            k--
        }
        k++
    }
};