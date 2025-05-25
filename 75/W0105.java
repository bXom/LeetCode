public class W0105 {
    // 试题
    // leetcode-125
    // https://leetcode.cn/problems/valid-palindrome/description/
    public static void main(String[] args) {
        System.out.println("result: " + solution_1(l1, l2));
    }

    public static boolean solution_1(String s) {
        s = s.toLowerCase();
        s = s.replaceAll("[^a-zA-Z0-9]", "");
        int len = s.length();
        for (int i = 0; i < len / 2; i++) {
            if (s.charAt(i) != s.charAt(len - i - 1)) {
                return false;
            }
        }
        return true;
    }
}