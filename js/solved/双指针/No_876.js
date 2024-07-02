'use strict';
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * NO.876
 * 链表的中间结点
 * @param {ListNode} head
 * @return {ListNode}
 * 快慢指针
 */
const sol1 = (head) => {
    let testS = head, testF = head;
    while (true) {
        if (testF.next === null) return testS;
        testS = testS.next;
        if (testF.next.next === null) return testS;
        testF = testF.next.next;
    }
};