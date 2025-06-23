public class W0206 {
    // 试题
    // leetcode-169
    // https://leetcode.cn/problems/majority-element/
    public static void main(String[] args) {
        System.out.println("result: " + majorityElement(new int[]{1, 2, 3}));
    }

    public static int majorityElement(int[] nums) {
        int max = 0;
        Map<Integer, Integer> map = new HashMap<>();
        for (int num : nums) {
            int size = 1;
            if (map.containsKey(num)) {
                size += map.get(num);
            }
            max = Math.max(max, size);
            map.put(num, size);
            if (max > nums.length / 2) {
                return num;
            }
        }
        return 0;
    }
}