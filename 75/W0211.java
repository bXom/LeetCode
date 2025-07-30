public class W0211 {
    // 试题
    // leetcode-217
    // https://leetcode.cn/problems/contains-duplicate/
    public static void main(String[] args) {
        System.out.println("result: " + containsDuplicate(null));
    }

    public static boolean containsDuplicate(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int num : nums) {
            if (map.containsKey(num)) {
                return true;
            }
            map.put(num, 1);
        }
        return false;
    }

    public static boolean sortSolver(int[] nums) {
        Arrays.sort(nums);
        int size = nums.length;
        for (int i = 0; i < size - 1; i++) {
            if (nums[i] == nums[i + 1]) return true;
        }
        return false;
    }
}
