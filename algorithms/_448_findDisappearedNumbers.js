// Source : https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/
// Author : zhouweilin
// Date   : 2017-09-20
// Tag    : Array

/*
问题:
找出数组nums中，对应[1,2,...,n]，消失的数。满足：1 <= nums[i] <= n，重复元素最多重复1次。

eg:
Input: [4,3,2,7,8,2,3,1]
Output:[5,6]

思路: （标记法，2遍遍历）
利用最多重复1次的特性，利用正负标记。
遍历第1遍，给其对应“正确位置”的那个数，变为负数。完成该步后，则出现过的数，下标对应数将为负。
遍历第2遍，找出为负的元素，根据其下标，得出结果。

时间复杂度:

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var result = [];

    for (var i = 0; i < nums.length; i++) { //标记
        var index = Math.abs(nums[i])-1;
        if(nums[index] > 0)
            nums[index] = -nums[index];
    }
    for (i = 0; i < nums.length; i++) {     //正数
        if (nums[i] > 0)
            result.push(i+1);
    }
    return result;
};
