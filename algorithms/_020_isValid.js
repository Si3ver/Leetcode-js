// Source : https://leetcode.com/problems/non-decreasing-array/description/
// Author : zhouweilin
// Date   : 2017-09-11
// DS     : stack

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var c = new Array();    //use as a stack
    var dic = {             //dic
        "(": ")",
        "[": "]",
        "{": "}"
    };
    for(var i = 0; i < s.length; i++){
        if(c[i] === "undefined" || dic[c[c.length-1]] !== s[i]){
            c.push(s[i]);
        }else if(dic[c[c.length-1]] === s[i]){
            c.pop();
        }else{
            return false;
        }
    }
    return c.length === 0;
};
