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
        var possibleSecondNumber = (nums[i] - target)
        if ((target < 0 && possibleSecondNumber>0)||(possibleSecondNumber<0)){
            possibleSecondNumber = possibleSecondNumber*-1
        }
        for (let y = i+1; y<nums.length; y++){
            if (nums[y] == possibleSecondNumber){
                outputArray.push(i);
                outputArray.push(y);
                return outputArray;
            }
        }
    }
};

console.log(twoSum(numInput, targetInput));