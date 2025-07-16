public class W0210 {
    // 试题
    // leetcode-104
    // https://leetcode.cn/problems/maximum-depth-of-binary-tree/
    public static void main(String[] args) {
        System.out.println("result: " + maxDepth(null));
    }

    public static int maxDepth(TreeNode root) {
        return 0;
    }

    public static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode() {
        }

        TreeNode(int val) {
            this.val = val;
        }

        TreeNode(int val, TreeNode left, TreeNode right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }
}