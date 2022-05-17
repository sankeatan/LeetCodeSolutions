/**
 * 35. Search Insert Position
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    
    function binSrch(beg, end) {
        if(beg > end) return beg;
        const mid = Math.floor((beg+end)/2)
        
        if(nums[mid]===target){return mid;}
        if(nums[mid]>target){return binSrch(beg, mid-1)}
        if(nums[mid]<target){return binSrch(mid+1, end)}
    }
    
    return binSrch(0, nums.length-1);
}