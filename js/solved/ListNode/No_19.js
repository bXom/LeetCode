/**
 * NO.19
 * 删除链表的倒数第 N 个结点
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * @param {ListNode} head
 * @param {number} n
 */
// 遍历链表长度，修改对应位置结点的 next 值
const sol1 = (head, n) => {
    let result = new ListNode(0, head), mid = result, long = 0;
    while (mid) {
        mid = mid.next;
        long++;
    }
    let position = long - n - 1;
    let removeNode = result;
    while (position) {
        removeNode = removeNode.next;
        position--;
    }
    removeNode.next = removeNode.next.next;
    return result.next;
};
// 倒数第 n 个结点，所以是后进先出，可以类比栈的模式
const sol2 = (head, n) => {
    let result = new ListNode(0, head), mid = result;
    let stack = [];
    while (mid) {
        stack.push(mid);
        mid = mid.next;
    }
    while (n > 0) {
        stack.pop();
        n--;
    }
    let removeNode = stack.pop();
    removeNode.next = removeNode.next.next;
    return result.next;
};
// 双指针
const sol3 = (head, n) => {
    let slow = -n;
    let result = new ListNode(0, head);
    let fastList = result, slowList = result;
    while (fastList.next) {
        fastList = fastList.next;
        if (slow >= 0) slowList = slowList.next;
        slow++;
    }
    slowList.next = slowList.next.next;
    return result.next;
};