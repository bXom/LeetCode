public class W0201 {
    // 试题
    // leetcode-278
    // https://leetcode.cn/problems/first-bad-version/
    public static void main(String[] args) {
        System.out.println("result: " + firstBadVersion(5));
    }

    // 二分法
    public static int firstBadVersion(int n) {
        int left = 1;
        int right = n;
        while ((right - left) > 1) {
            int mid = left + (right - left) / 2;
            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        if (isBadVersion(left)) {
            return left;
        }
        return right;
    }
}
