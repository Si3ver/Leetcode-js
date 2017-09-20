// Source : https://leetcode.com/problems/plus-one/description/
// Author : zhouweilin
// Date   : 2017-09-20
// Tag    : Array

/*
题目：
实现一个加一函数，输入一个digits数组，输出加一后的digits数组。
eg. input [9, 4, 5]
    output [9, 5, 5]

    input [9, 9, 9]
    output [1, 0, 0, 0]

解题思路：（进位！）
从后往前遍历数组，给最后一位加1操作，若其小于10，则不产生进位，直接返回数组；若有进位，则其变为0，给上一位加1（若直到最后一位还进位，则在数组最前端进位）。

时间复杂度： O(n)。
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (var i = digits.length - 1; i >= 0; i--){
        if (++digits[i] < 10) {
            return digits;
        }else {
            digits[i] = 0;
        }
    }
    digits.unshift(1);
    return digits;
};
