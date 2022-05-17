/**
 * 977. Squares of a Sorted Array
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    var sqrdArr = nums.map(x => Math.pow(x, 2))
    sqrdArr.sort(function(a, b){return a-b});
    return sqrdArr;
};