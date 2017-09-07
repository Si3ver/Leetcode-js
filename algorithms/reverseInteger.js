// Source : https://leetcode.com/problems/reverse-integer/description/
// Author : zhouweilin
// Date   : 2017-09-07
// DS     : 基本运算-除法和取余

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var y = 0;
    while(Math.abs(x) > 0){
        y = 10 * y + x % 10;
        x = (x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10));
    }
    return Math.abs(y) > 2147483648 ? 0 : y;
};
