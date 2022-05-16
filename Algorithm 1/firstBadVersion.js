/**
 
 Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

 You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    
    
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left=1;
        let right = n;
        let middle=0;
        while (right - left >= 1){
            middle = Math.floor((right+left)/2);
            if(!isBadVersion(middle)){
                if(isBadVersion(middle+1)){
                    return middle+1;
                } else left=middle;
            } else right=middle;
            } return left;
        } 
    };