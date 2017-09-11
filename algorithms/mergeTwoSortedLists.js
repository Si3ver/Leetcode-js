// Source : https://leetcode.com/problems/merge-two-sorted-lists/description/
// Author : zhouweilin
// Date   : 2017-09-11
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
var mergeTwoLists = function(l1, l2) {
    var head = new ListNode(0),
        tail = head;

    while(l1 && l2){
        if(l1.val < l2.val){
            tail.next = l1;
            l1 = l1.next;
        }else{
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }
    tail.next = l1 ? l1 : l2;       // left-list
    return head.next;               // 浪费了第一个节点
};
