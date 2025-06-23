public class W0203 {
    // 试题
    // leetcode-70
    // https://leetcode.cn/problems/climbing-stairs/
    public static void main(String[] args) {
        System.out.println("result: " + climbStairs(10));
    }

    // 时间复杂度 O(m+n)
    public static int climbStairs(int n) {
        if (n < 3) return n;
        int a = 1;
        int b = 2;
        int result = a + b;
        for (int i = 3; i < n; i++) {
            a = b;
            b = result;
            result = a + b;
        }
        return result;
    }
}