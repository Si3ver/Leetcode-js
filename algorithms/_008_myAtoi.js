// Source : https://leetcode.com/problems/zigzag-conversion/description/
// Author : zhouweilin
// Date   : 2017-09-16
// DS     : 
// Method : 繁琐的判断

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var i = 0, flag = 1, result = 0;
    if(str.length === 0) return 0;
    while(str[i] === " ")
        i++;

    if(str[i] === "-"){
        flag = -1;
        i++;
    }else if (str[i] === "+"){
        i++;
    }

    for(; i < str.length; i++){
        if(str[i] >= "0" && str[i] <= "9")
            result = result * 10 + (str[i] - "0");
        else if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z") || str[i] === " "){
            break;
        }else{
            return 0;
        }
    }
    if(flag * result > 2147483647){
        result = 2147483647;
    }else if(flag * result < -2147483648){
        result = 2147483648;
    }
    return flag * result;
};
