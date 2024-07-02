/**
 * NO.21
 * 合并两个有序链表
 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists_solution1 = (l1, l2) => {
    let l = l1.concat(l2);
    l.sort();
    return l;
};

var mergeTwoLists_solution2 = (l1, l2) => {
    if (l1.length < 1) {
        return l2;
    }
    if (l2.length < 1) {
        return l1;
    }
    let l = [];
    let l1Length = l1.length;
    let l2Length = l2.length;
    for (let i = 0; ; i++) {
        if (l1[i] < l2[i]) {
            l.push(l1[i]);
        } else {
            l.push(l2[i]);
        }
    }
};
var mergeTwoLists = function (l1, l2) {
    if (l1 == null) {
        return l2;
    }
    if (l2 == null) {
        return l1;
    }
    if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));