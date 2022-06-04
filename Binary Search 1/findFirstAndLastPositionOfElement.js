/**
 * 34. Find First and Last Position
 * 
 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.


 * 
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    let start = 0;
    let end = nums.length-1;
    let first = 0;
    let last = 0;
    let mid = 0;
    let output = [];
    while(start<=end){
        mid = Math.floor((start+end)/2);
        if(nums[mid]==target){
            first = mid;
            last = mid;
            while(nums[first]==target){
                first--;
            }
            first++;
            while(nums[last]==target){
                last++
            }
            last--;
            output.push(first);
            output.push(last);
            return output;
        } else if(nums[mid]>target){
            end = mid-1;
        } else {
            start = mid+1;
        }
    }
    output.push(-1);
    output.push(-1);
    return output;
};