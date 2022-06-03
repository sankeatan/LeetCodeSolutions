/**
 * 
 * 69. Sqrt(x)
 * 
 * Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
 * 
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    if(x==1){
        return 1;
    }
    if(x==4){
        return 2;
    }
   let i = 1;
    while(i*i<=x){
        i++;
    } return i-1;
};