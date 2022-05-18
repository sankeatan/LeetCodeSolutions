/**
 * 
 * 167. Two Sum II - Input Array Is Sorted
 * 
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.
 * 
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    let solution = [];
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
             if(numbers[i] + numbers[j]==target){
                solution.push(i+1);
                solution.push(j+1);
                return solution;
            } else if(numbers[i]+numbers[j]>target){
                j=numbers.length;
            } else {
                while(numbers[i]==numbers[j]){
                i++;
                j++;
                }
            }
        }
    }
};