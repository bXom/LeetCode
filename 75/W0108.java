public class W0108 {
    // 试题
    // leetcode-704
    // https://leetcode.cn/problems/binary-search/
    public static void main(String[] args) {
        System.out.println("result: " + search(new int[]{9}, 9));
    }

    public static int search(int[] nums, int target) {
        int start = 0;
        int end = nums.length - 1;
        while (start <= end) {
            int mid = (end - start) / 2 + start;
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return -1;
    }
}