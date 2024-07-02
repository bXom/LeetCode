'use strict';
/**
 * NO.160
 * 相交链表
 * 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。
 * 如果两个链表没有交点，返回 null 。
 * 图示两个链表在节点 c1 开始相交：
 * 题目数据 保证 整个链式结构中不存在环。
 * 注意，函数返回结果后，链表必须 保持其原始结构 。
 * 你能否设计一个时间复杂度 O(n) 、仅用 O(1) 内存的解决方案？
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 哈希表
const sol1 = (headA, headB) => {
    let set = new Set();
    while (headA) {
        set.add(headA);
        headA = headA.next;
    }
    while (headB) {
        if (set.has(headB)) return headB;
        else headB = headB.next;
    }
    return null;
};
// 双指针
// 长度相等则最终指向相同值或 null，长度不等则会追上
// 不等长示例：
// headA = [c,d,a,b]; headB = [e,a,b]
// pA = [c,d,a,b,e,a,b]
// pB = [e,a,b,c,d,a,b]
// headA = [c,d]; headB = [e]
// pA = [c,d,null,e,null]
// pB = [e,null,c,d,null]
// 永远会追上
const sol2 = (headA, headB) => {
    if (headA === null || headB === null) {
        return null;
    }
    let pA = headA, pB = headB;
    while (pA !== pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;
};