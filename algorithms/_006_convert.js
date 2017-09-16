// Source : https://leetcode.com/problems/zigzag-conversion/description/
// Author : zhouweilin
// Date   : 2017-09-16
// DS     : array, string
// Method : 不同index进行遍历（解法参考了discussion！）

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) return s;

    var i = 0,
        j = 0,
        r = [];
    for(i = 0; i < numRows; i++){       //initialize numRows ""
        r[i] = "";
    }

    i = 0;
    while(i < s.length){                                     //仅仅需要遍历一遍，复杂度为O(n)
        for(j = 0; j <= numRows - 1 && i < s.length; j++)    //竖直向下
            r[j] = r[j].concat(s[i++]);
        for(j = numRows - 2; j >= 1 && i < s.length; j--)    //斜向上
            r[j] = r[j].concat(s[i++]);
    }
    for(i = 1; i < numRows; i++){           //拼接numRows个字符串
        r[0] = r[0].concat(r[i]);
    }
    return r[0];
};
