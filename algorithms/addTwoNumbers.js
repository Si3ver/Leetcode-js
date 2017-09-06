// Source : https://leetcode.com/problems/add-two-numbers/description/
// Author : zhouweilin
// Date   : 2017-09-06
// DS     : linked-list
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var dummyHead = new ListNode(0),        //头节点
        curr = dummyHead;                   //当前正在处理的节点
    var p = l1,
        q = l2;
    var c = 0;                              //进位
    while(p || q){
        var x = p ? p.val : 0,
            y = q ? q.val : 0;
        var s = x + y + c;                  //和

        curr.next = new ListNode(s % 10);   //向后生成一个节点
        curr = curr.next;                   //当前节点指针后移

        c = Math.floor(s / 10);             //c的值给下一次循环使用
        if(p) p = p.next;
        if(q) q = q.next;
    }
    if(c > 0){
        curr.next = new ListNode(c);
    }
    return dummyHead.next;                  //实际上，浪费了首节点
};
