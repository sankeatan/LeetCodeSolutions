/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const numInput = [-1,-2,-3,-4,-5];
const targetInput = -8;
var twoSum = function(nums, target) {
    var outputArray = [];
    for (let i = 0; i<nums.length; i++){
        for (let y = i+1; y<nums.length; y++){
            if (nums[i] + nums[y] == target){
                outputArray.push(i);
                outputArray.push(y);
                return outputArray;
            }
        }
    }
};

console.log(twoSum(numInput, targetInput));