public class W0112 {
    // 试题
    // leetcode-141
    // https://leetcode.cn/problems/linked-list-cycle/
    public static void main(String[] args) {
        System.out.println("result: " + hasCycle(new ListNode(1)));
    }

    public static boolean hasCycle(ListNode head) {
        return hash_solution(head);
    }

    public static boolean hash_solution(ListNode head) {
        Set<ListNode> set = new HashSet<>();
        do {
            if (head == null) return false;
            if (head.next == null) return false;
            if (set.contains(head)) return true;
            set.add(head);
            head = head.next;
        } while (true);
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