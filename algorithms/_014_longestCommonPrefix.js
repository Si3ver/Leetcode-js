// Source : https://leetcode.com/problems/longest-common-prefix/description/
// Author : zhouweilin
// Date   : 2017-09-08
// DS     :

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var cp = "";
    if(strs.length === 0) return cp;            //空串
    for(var i = 0; i < strs[0].length; i++){    //i遍历第一个串
        var ch = strs[0].charAt(i);
        for(var j = 1; j < strs.length; j++){   //j遍历整个strs数组
            if(ch !== strs[j].charAt(i))
                return cp;
        }
        cp += ch;
    }
    return cp;
};
