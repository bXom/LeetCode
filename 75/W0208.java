public class W0208 {
    // 试题
    // leetcode-543
    // https://leetcode.cn/problems/diameter-of-binary-tree/
    public static void main(String[] args) {
        System.out.println("result: " + diameterOfBinaryTree(null));
    }

    public static int diameterOfBinaryTree(TreeNode root) {
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