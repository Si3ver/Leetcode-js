// Source : https://leetcode.com/problems/two-sum/description/
// Author : zhouweilin
// Date   : 2017-09-05
// DS     : dict
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var m = {};
    for(var i = 0; i < nums.length; i++){
        var a = target - nums[i];               //差值
        if (typeof m[nums[i]] !== "undefined"){ //如果dict中包含key = nums[i]
            return [m[nums[i]], i];             //则返回结果
        }else {
            m[a] = i;                           //否则，写入{key:value}={差值:序号}
        }
    }
};
