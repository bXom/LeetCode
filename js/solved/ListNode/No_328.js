'use strict';
/**
 * NO.328
 * 奇偶链表
 * 给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。
 * 请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。
 * 请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    // 初始化奇偶链表
    let oddList = new ListNode(), evenList = new ListNode(0);
    let length = 1;
    oddList = head;
    let secondList = evenList;
    while (oddList) {
        // 奇数
        if (length % 2 === 1) {
            if (oddList.next) {
                evenList.next = oddList.next;
                evenList = evenList.next;
                if (oddList.next.next) {
                    oddList.next = oddList.next.next;
                    oddList = oddList.next;
                } else {
                    evenList.next = null
                    oddList.next = secondList.next;
                    break;
                }
            } else {
                evenList.next = null
                oddList.next = secondList.next;
                break;
            }
        }
        length++;
    }
    return head;
};