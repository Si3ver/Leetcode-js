// Source : https://leetcode.com/problems/palindrome-number/description/
// Author : zhouweilin
// Date   : 2017-09-07
// DS     :

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var charList = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    var result = charList[s.charAt(s.length - 1)];
    for(var i = s.length - 2; i >= 0; i--){
        if(charList[s.charAt(i)] >= charList[s.charAt(i+1)]){
            result += charList[s.charAt(i)];
        }else{
            result -= charList[s.charAt(i)];
        }
    }
    return result;
};
