// Source : https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
// Author : zhouweilin
// Date   : 2017-09-11
// DS     : set
// Method : slide-window

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var mySet = new Set();
    var ans = 0,i = 0, j = 0;

    while (i < s.length && j < s.length) {
        if(!mySet.has(s.charAt(j))){
            mySet.add(s.charAt(j++));       //right point ++
            ans = Math.max(ans, j - i);
        }else{
            mySet.delete(s.charAt(i++));    //left point ++
        }
        // console.log(mySet);
    }
    return ans;
};
