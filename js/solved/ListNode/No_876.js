'use strict';
/**
 * NO.876
 * 链表的中间结点
 * 给定一个头结点为 head 的非空单链表，返回链表的中间结点。
 * 如果有两个中间结点，则返回第二个中间结点。
 * @param {ListNode} head
 */
// 双指针/快慢指针
// 慢指针在快指针的一半位置，当快指针结束遍历，慢指针即指向中间结点
const sol1 = (head) => {
    let fast = 1, slow = 1;
    let midList = new ListNode(0, head);
    let fastList = midList, slowList = midList;
    while (fastList.next) {
        fastList = fastList.next;
        let halfNum = fast % 2 === 0 ? fast / 2 + 1 : (fast + 1) / 2;
        if (slow === halfNum) {
            slowList = slowList.next;
            slow++;
        }
        fast++;
    }
    return slowList;
};
// fast 永远是 slow 的两倍速度
// 比 sol1 方法时间节省一半，空间也节省
const sol2 = (head) => {
    let slow = fast = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};