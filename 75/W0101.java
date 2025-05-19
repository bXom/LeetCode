import java.util.*;

public class W0101 {
    // 试题
    // leetcode-1
    // https://leetcode.com/problems/two-sum/description/
    public static void main(String[] args) {
        solution(new int[]{2, 7, 11, 15}, 9);
    }

    public static int[] solution(int[] nums, int target) {
        Map<Integer, Integer> numsMap = new HashMap<>();
        int len = nums.length;
        for (int i = 0; i < len; i++) {
            int num = nums[i];
            try {
                if (numsMap.get(target - num) != null) {
                    return new int[]{numsMap.get(target - num), i};
                }
            } catch (Exception ignored) {
            } finally {
                numsMap.put(num, i);
            }
        }
        return new int[]{};
    }
}
