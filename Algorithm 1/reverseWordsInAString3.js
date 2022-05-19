/**
 * 
 * 557. Reverse Words in a String III
 * 
 * Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
 * 
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    let newArr = s.split(' ');
     for (let i=0; i<newArr.length; i++){
         newArr[i] = newArr[i].split('').reverse().join('')
     }
     return newArr.join(' ');
 };