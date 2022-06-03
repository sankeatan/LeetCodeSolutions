/**
 * 367. Valid Perfect Square
 * 
 * Given a positive integer num, write a function which returns True if num is a perfect square else False.

Follow up: Do not use any built-in library function such as sqrt.
 * 
 * @param {number} num
 * @return {boolean}
 */
 var isPerfectSquare = function(num) {
    if(num==1 || num==4 || num==9){return true;}
    let start = 1;
    let end = Math.floor((start+num)/2);
    while (start<=end){
        let mid = Math.floor((start+end)/2);
        let sqrd = mid*mid;
        if (sqrd==num){
            return true;
        } else if (sqrd>num){
            end=mid-1;
        } else {
            start=mid+1;
        }
    } return false;
};