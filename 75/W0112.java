public class W0112 {
    // 试题
    // leetcode-141
    // https://leetcode.cn/problems/linked-list-cycle/
    public static void main(String[] args) {
        System.out.println("result: " + hasCycle(new ListNode(1)));
    }

    public static boolean hasCycle(ListNode head) {

    }

    public static class ListNode {
        int val;
        ListNode next;

        ListNode(int x) {
            val = x;
            next = null;
        }
    }
}
