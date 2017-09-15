// Source : https://leetcode.com/problems/longest-palindromic-substring/description/
// Author : zhouweilin
// Date   : 2017-09-14
// DS     :
// Method : DP

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var start = 0, end = 0;
    for(var i = 0; i < s.length; i++){
        var len1 = expandAroundCenter(s,i,i);
        var len2 = expandAroundCenter(s,i,i+1);
        var len = Math.max(len1,len2);
        if(len > end - start){
            start = i - (len - 1)/2;
            end = i + len / 2;
        }
    }
    return s.slice(start,end+1);
};

var expandAroundCenter = function(s, left, right){
    var L = left, R = right;
    while(L >= 0 && R < s.length && s[L] === s[R]){
        L--;
        R++;
    }
    return R-L-1;
};

var isPal = function(s){
    for(var i = 0; i < s.length/2; i++){
        if(s[i] !== s[s.length-1-i])
            return false;
    }
    return true;
};
