public class W0205 {
    // 试题
    // leetcode-206
    // https://leetcode.cn/problems/reverse-linked-list/
    public static void main(String[] args) {
        System.out.println("result: " + reverseList(new ListNode(1)));
    }

    public static ListNode reverseList(ListNode head) {
        ListNode cache = head;
        ListNode pre = null;
        while (cache != null) {
            ListNode next = cache.next;
            cache.next = pre;
            pre = cache;
            cache = next;
        }
        return pre;
    }

    public static class ListNode {
        int val;
        ListNode next;

        ListNode() {
        }

        ListNode(int val) {
            this.val = val;
        }

        ListNode(int val, ListNode next) {
            this.val = val;
            this.next = next;
        }
    }
}