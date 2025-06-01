public class W0111 {
    // 试题
    // leetcode-110
    // https://leetcode.cn/problems/balanced-binary-tree/
    public static void main(String[] args) {
        System.out.println("result: " + isBalanced(new TreeNode()));
    }

    public static boolean isBalanced(TreeNode root) {

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