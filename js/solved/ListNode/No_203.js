'use strict';
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * NO.203
 * 移除链表元素
 * 给你一个链表的头节点 head 和一个整数 val ，
 * 请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const sol1 = (head, val) => {
    let result = new ListNode(0, head);
    let searchList = result;
    while (searchList.next) {
        if (searchList.next.val === val) {
            searchList.next = searchList.next.next;
        } else {
            searchList = searchList.next;
        }
    }
    return result.next;
};