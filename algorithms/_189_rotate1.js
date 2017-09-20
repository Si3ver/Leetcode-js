// Source : https://leetcode.com/problems/rotate-array/description/
// Author : zhouweilin
// Date   : 2017-09-20
// Tag    : Array

/*
问题:
以步长k翻转一个数组nums。（限制只能用一个额外空间）

eg:input nums = [1,2,3,4,5,6,7], k = 3
   output [5,6,7,1,2,3,4]

思路1: (reverse 三轮)  （参考solution#4！）
Original List                   : 1 2 3 4 5 6 7
After reversing all numbers     : 7 6 5 4 3 2 1
After reversing first k numbers : 5 6 7 4 3 2 1
After revering last n-k numbers : 5 6 7 1 2 3 4 --> Result

时间复杂度:O(n)
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k %= nums.length;
    reverse(nums, 0, nums.length-1);
    reverse(nums, 0, k-1);
    reverse(nums, k, nums.length-1);
};

var reverse = function(nums, start, end) {  //双指针
    while (start < end) {
        var tmp = nums[start];
        nums[start++] = nums[end];
        nums[end--] = tmp;
    }
};
