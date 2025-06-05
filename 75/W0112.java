public class W0112 {
    // 试题
    // leetcode-141
    // https://leetcode.cn/problems/linked-list-cycle/
    public static void main(String[] args) {
        System.out.println("result: " + hasCycle(new ListNode(1)));
    }

    public static boolean hasCycle(ListNode head) {
        // return hash_solution(head);
        return pointer_solution(head);
    }

    public static boolean pointer_solution(ListNode head) {
        if (head == null || head.next == null) return false;
        ListNode slowPointer = head;
        ListNode fastPointer = head.next;
        while (slowPointer != fastPointer) {
            if (fastPointer == null || fastPointer.next == null) return false;
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;
        }
        return true;
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