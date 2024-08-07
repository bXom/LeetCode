'use strict';
/**
 * NO.141
 * 环形链表
 * 给定一个链表，判断链表中是否有环。
 * 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
 * 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
 * 如果链表中存在环，则返回 true 。 否则，返回 false 。
 * 空间复杂度  O(1)
 * @param {ListNode} head
 * @returns {boolean}
 */
// 双指针，一快一慢，若为环形，快指针一定会追上慢指针（套圈）
const sol1 = (head) => {
    if (!head || !head.next) return false;
    let slow = new ListNode(), fast = new ListNode();
    slow = head;
    fast = head.next;
    while (slow !== fast) {
        if (!fast || !fast.next) return false;
        slow = slow.next ? slow.next : null;
        fast = fast.next.next ? fast.next.next : null;
    }
    return true;
};