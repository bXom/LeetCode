'use strict';
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * NO.19
 * 删除链表的倒数第 N 个结点
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const sol1 = (head, n) => {
    let resultList = new ListNode(0, head);
    let slow = resultList, fast = resultList;
    while (fast.next !== null) {
        fast = fast.next;
        if (n <= 0) slow = slow.next;
        n--;
    }
    slow.next = slow.next.next;
    return resultList.next;
};