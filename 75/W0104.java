public class W0104 {
    // 试题
    // leetcode-121
    // https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/description/
    public static void main(String[] args) {
        System.out.println("result: " + solution_1(new int[]{5,10,1,5,2}));
    }

    // 记录最小值与后项值的差
    public static int solution_1(int[] prices) {
        int min = prices[0];
        int result = 0;
        int len = prices.length;
        for (int i = 1; i < len; i++) {
            if (prices[i] - min > result) result = prices[i] - min;
            if (prices[i] < min) min = prices[i];
        }
        return result;
    }

    // 暴力解法超时
    public static int solution_2(int[] prices) {
        int max = 0;
        int len = prices.length;
        for (int i = 0; i < len; i++) {
            for (int j = i + 1; j < len; j++) {
                if (prices[j] - prices[i] > max) {
                    max = prices[j] - prices[i];
                }
            }
        }
        return max;
    }
}