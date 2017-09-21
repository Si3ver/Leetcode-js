// Source : https://leetcode.com/problems/rotate-array/description/
// Author : zhouweilin
// Date   : 2017-09-20
// Tag    : Array

/*
问题:
以步长k翻转一个数组nums。（限制只能用一个额外空间）

eg1:input nums = [1,2,3,4,5,6,7], k = 3
   output [5,6,7,1,2,3,4]

eg2:input nums = [1,2,3,4,5,6], k = 2
    output       [5,6,1,2,3,4]


思路2: (Cyclic Replacements,所有元素往前跨了k步)  （参考solution#3！）
首先：
1 2 3 4 5 6 7 ,k = 3
_ 1 2 3 4 5 6 7         1 step
_ _ 1 2 3 4 5 6 7       2 step
_ _ _ 1 2 3 4 5 6 7     3 step
5 6 7 1 2 3 4
所以，可以位移k次，每次移一步，时间复杂度为O(kn)，空间复杂度为O(1)，时间复杂度略高，弃！

考虑优化，每次移动步子跨k步，index循环取余：
1 2 3 4 5 6 7 k=3
_ 2 3 1 5 6 7 tmp=nums[0+3]=4
_ 2 3 1 5 6 4 tmp=nums[3+3]=7
_ 2 7 1 5 6 4 tmp=nums[(6+3)%7]=nums[2]=3
_ 2 7 1 5 3 4 tmp=nums[5]=6
_ 6 7 1 5 3 4 tmp=nums[1]=2
_ 6 7 1 2 3 4 tmp=nums[4]=5
5 6 7 1 2 3 4
该例只需要循环1轮。

eg2:(2轮外层循环)
1 2 3 4 5 6
5 2 1 4 3 6 | after round 1(start=1)
5 6 1 2 3 4 | after round 2(start=2)

时间复杂度:O(n)

评价：这种方法相对方法1，细节麻烦一些。但其实思路很清晰！每一轮循环
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k %= nums.length;   //equal effect!
    if (k === 0) return;

    for (var start = 0, cnt = 0; cnt < nums.length;start++){
        var tmp = nums[start],           //储存跨k步前的数
            index = (start+k)%nums.length;
        do{
            nums[start] = nums[index];  //利用空间nums[start]，交换nums[index]与tmp
            nums[index] = tmp;
            tmp = nums[start];
            index = (index+k)%nums.length;
            cnt++;                      //交换次数
        }while(index !== (start+k)%nums.length);
    }
};
