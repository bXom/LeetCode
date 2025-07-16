public class W0209 {
    // 试题
    // leetcode-876
    // https://leetcode.cn/problems/middle-of-the-linked-list/
    public static void main(String[] args) {
        System.out.println("result: " + middleNode(null));
    }

    public static ListNode middleNode(ListNode head) {
    }

    public class ListNode {
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