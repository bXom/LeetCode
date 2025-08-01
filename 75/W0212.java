public class W0212 {
    // 试题
    // leetcode-53
    // https://leetcode.cn/problems/maximum-subarray/
    public static void main(String[] args) {
        System.out.println("result: " + maxSubArray(null));
    }

    public static int maxSubArray(int[] nums) {
        int cache = 0;
        int maxVal = nums[0];
        for (int num : nums) {
            cache = Math.max(cache + num, num);
            maxVal = Math.max(cache, maxVal);
        }
        return maxVal;
    }
}
