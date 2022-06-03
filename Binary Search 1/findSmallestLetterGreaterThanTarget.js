/**
 * 744. Find Smallest Letter Greater Than Target
 * 
 * 
 * Given a characters array letters that is sorted in non-decreasing order and a character target, return the smallest character in the array that is larger than target.
 * 
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
 var nextGreatestLetter = function(letters, target) {
    let i = 0;
    while (i<=letters.length-1){
        if(letters[i]>target){
            return letters[i];
        } i++;
    } return letters[0];
};