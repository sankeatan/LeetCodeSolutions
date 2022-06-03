/**
 * 852. Peak Index in a Mountain Array
 * 
 * Let's call an array arr a mountain if the following properties hold:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... arr[i-1] < arr[i]
arr[i] > arr[i+1] > ... > arr[arr.length - 1]
Given an integer array arr that is guaranteed to be a mountain, return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].
 * 
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = function(arr) {
    let peak = 0;
    let i = 0;
    let j = arr.length-1;
    while (i<j){
        let mid=Math.floor((i+j)/2);
        if(arr[mid]>arr[peak] && arr[mid]>arr[i] && arr[mid]>arr[j]){
            peak=mid;
        }else if(arr[i]>arr[peak] && arr[i]>arr[j]){
            peak=i;
        }else if (arr[j]>arr[peak]){
            peak=j;
        }
        i++;
        j--;
    } return peak;
};