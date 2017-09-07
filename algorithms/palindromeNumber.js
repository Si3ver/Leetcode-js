// Source : https://leetcode.com/problems/palindrome-number/description/
// Author : zhouweilin
// Date   : 2017-09-07
// DS     : 

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0 || (Math.floor(x) % 10 === 0 && x !== 0)) return false;

    var y = 0;
    while(x > y){
      y = y * 10 + Math.floor(x) % 10;
      x = Math.floor(x / 10);
    }
    return x === y || x === Math.floor(y / 10);
};
