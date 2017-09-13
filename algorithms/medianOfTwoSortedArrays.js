// Source : https://leetcode.com/problems/median-of-two-sorted-arrays/description/
// Author : zhouweilin
// Date   : 2017-09-13
// DS     : Array
// Method :

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var reslut = 0,
        min = 0,
        max = 0;
    while(nums1.length > 0 && nums2.length > 0){
        min = nums1[0] < nums2[0] ? nums1.shift() : nums2.shift();
        if(nums1.length == 0){
            max = nums2.pop();
        }else if(nums2 == 0){
            max = nums1.pop();
        }else{
            max = nums1[nums1.length-1] > nums2[nums2.length-1] ? nums1.pop() : nums2.pop();
        }
    }
    if(nums1.length > 0){
        result = nums1.length % 2 == 0 ? (nums1[nums1.length / 2 - 1] + nums1[nums1.length / 2])/2 : nums1[(nums1.length -  1) / 2];
    }else if(nums2.length > 0){
        result = nums2.length % 2 == 0 ? (nums2[nums2.length / 2 - 1] + nums2[nums2.length / 2])/2 : nums2[(nums2.length -  1) / 2];
    }else{
        return (min + max)/2;
    }
    return result;
};
