
public class W0102 {
    // 试题
    // leetcode-20
    // https://leetcode.com/problems/valid-parentheses/description/
    public static void main(String[] args) {
        System.out.println("result: " + solution_1("{}()[()]"));
    }

    // 堆栈
    public static boolean solution_1(String s) {
        int len = s.length();
        Deque<String> q = new LinkedList<>();
        if (len % 2 != 0) return false;
        q.add(s.charAt(0) + "");
        for (int i = 1; i < len; i++) {
            String now = s.charAt(i) + "";
            if (q.isEmpty()) {
                q.add(now);
            } else {
                String before = q.pollLast();
                if (!match(before, now)) {
                    q.add(before);
                    q.add(now);
                }
            }
        }
        return q.isEmpty();
    }

    public static boolean match(String before, String after) {
        if (before.equals("(") && after.equals(")")) {
            return true;
        }
        if (before.equals("{") && after.equals("}")) {
            return true;
        }
        return (before.equals("[") && after.equals("]"));
    }

}