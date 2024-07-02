'use strict';
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * NO.83
 * 删除排序链表中的重复元素
 * 存在一个按升序排列的链表，给你这个链表的头节点 head ，
 * 请你删除所有重复的元素，使每个元素 只出现一次 。
 * 返回同样按升序排列的结果链表。
 * @param {ListNode} head
 * @return {ListNode}
 */
const sol1 = (head) => {
    let resultList = new ListNode(-101, head);
    let searchList = resultList;
    let val = resultList.val;
    while (searchList.next) {
        if (searchList.next.val === val) {
            searchList.next = searchList.next.next;
        } else {
            val = searchList.next.val;
            searchList = searchList.next;
        }
    }
    return resultList.next;
};