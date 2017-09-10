// Source : https://leetcode.com/problems/non-decreasing-array/description/
// Author : zhouweilin
// Date   : 2017-09-10
// DS     : greedy-algo

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    var cnt = 0;
    for(var i = 1; i < nums.length && cnt <= 1; i++){
        if(nums[i] < nums[i-1]){
            cnt++;
            if(i == 1 || nums[i] >= nums[i-2]){     //nums[i-2] <= nums[i] < nums[i-1] eg.[2,4,3]or[2,4,2]
                nums[i-1] = nums[i];                //=>[2,3,3]or[2,2,2]
            }else{                                  //nums[i] < nums[i-2] < nums[i-1] eg.[2,4,1]
                nums[i] = nums[i-1];                //=>[2,4,4],因为如果不改nums[i],则得改前两个数
            }
        }
    }
    return cnt <= 1;
};
