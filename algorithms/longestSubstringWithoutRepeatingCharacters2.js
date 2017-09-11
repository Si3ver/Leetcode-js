// Source : https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
// Author : zhouweilin
// Date   : 2017-09-12
// DS     : hash-map
// Method : slide-window

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var myMap = new Map();

    for(var ans = 0,i = 0, j = 0; j < s.length; j++){
        if(myMap.has(s.charAt(j))){
            i = Math.max(myMap.get(s.charAt(j)),i);
        }
        ans = Math.max(ans, j - i + 1);
        myMap.set(s.charAt(j), j+1);
    }

    return ans;
};
