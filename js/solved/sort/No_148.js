'use strict';
/**
 * NO.148
 * 链表排序
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 * 进阶：你可以在 O(nlogn) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * @param {ListNode} head
 */
// 归并
// 双指针快慢指针找到中点
const sortList = (head) => {
    if (!head || !head.next) return head;
    // 慢指针指向中间值，快指针指向尾端值
    let slow = head, fast = head.next;
    let right = null;
    let i = 1, j = 2;
    while (fast) {
        // 偶数长度
        if (!fast.next) {
            right = new ListNode(0, slow.next);
            right = right.next;
            // 设置慢指针下一项为 null 切断链表，此时 head 为左侧链表
            slow.next = null;
            break;
            // 奇数长度
        } else if (!fast.next.next) {
            right = new ListNode(0, slow.next);
            right = right.next;
            // 设置慢指针下一项为 null 切断链表，此时 head 为左侧链表
            slow.next = null;
            j++;
            break;
        }
        i++;
        j += 2;
        slow = slow.next;
        fast = fast.next.next;
    }
    // console.log(`left: ${JSON.stringify(head)}`);
    // console.log(`right: ${JSON.stringify(right)}`);
    // console.log(`i: ${i}`);
    // console.log(`j: ${j}`);
    if ((j - i) > 1) right = sortList(right);
    // else right = right.next;
    if (i > 1) slow = sortList(head);
    // console.log(`right: ${JSON.stringify(right)}`);
    // console.log(`slow: ${JSON.stringify(slow)}`);
    let resultList = merge(right, slow);
    // console.log(`resultList: ${JSON.stringify(resultList)}`);
    return resultList;
};
/**
 * 合并
 * @param {ListNode} list1
 * @param {ListNode} list2
 */
const merge = (list1, list2) => {
    // console.log(`list1: ${JSON.stringify(list1)}`);
    // console.log(`list2: ${JSON.stringify(list2)}`);
    let mergeList = new ListNode(0);
    let mid = mergeList;
    // 比较大小存储链表
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            mid.next = list1;
            mid = mid.next;
            if (list1.next) list1 = list1.next;
            else list1 = null;
        } else {
            mid.next = list2;
            mid = mid.next;
            if (list2.next) list2 = list2.next;
            else list2 = null;
        }
    }
    // console.log(`mergeList1: ${JSON.stringify(mergeList)}`);
    // 补充剩余数据
    while (list1) {
        mid.next = list1;
        mid = mid.next;
        if (list1.next) list1 = list1.next;
        else list1 = null;
    }
    while (list2) {
        mid.next = list2;
        mid = mid.next;
        if (list2.next) list2 = list2.next;
        else list2 = null;
    }
    // console.log(`mergeList2: ${JSON.stringify(mergeList)}`);
    return mergeList.next;
};