/**
 * NO.21
 * 合并两个有序链表
 * 将两个升序链表合并为一个新的 升序 链表并返回。
 * 新链表是通过拼接给定的两个链表的所有节点组成的。
 * @param {ListNode} l1
 * @param {ListNode} l2
 */
// 递归
const sol1 = (l1, l2) => {
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1.val < l2.val) {
        l1.next = sol1(l1.next, l2);
        return l1;
    } else {
        l2.next = sol1(l1, l2.next);
        return l2
    }
};
// 迭代
const sol2 = (l1, l2) => {
    let resultList = new ListNode(-1);
    let prev = resultList;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }
    prev.next = l1 === null ? l2 : l1;
    return resultList.next;
};