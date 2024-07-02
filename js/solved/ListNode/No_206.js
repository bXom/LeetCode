'use strict';

/**
 * NO.206
 * 反转链表
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 * @param {ListNode} head
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? 0 : next);
};
// 迭代
const sol1 = (head) => {
    // 当前项的前项
    let prev = null;
    while (head) {
        // 记录后项
        let nextV = head.next;
        // 修改当前项的后项指针
        head.next = prev;
        // 修改前项对应为当前项
        prev = head;
        // 修改待反转的链表
        head = nextV;
    }
    return prev;
};
// 递归
const sol2 = (head) => {
    if (!head) return head;
    let nextV = sol2(head.next);
    head.next.next = head;
    head.next = null;
    return nextV;
};