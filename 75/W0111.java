public class W0111 {
    // 试题
    // leetcode-110
    // https://leetcode.cn/problems/balanced-binary-tree/
    public static void main(String[] args) {
        System.out.println("result: " + isBalanced(new TreeNode()));
    }

    public static boolean isBalanced(TreeNode root) {
        int depth = depth(root);
        return depth != -1;
    }

    public static int depth(TreeNode root) {
        if (root == null) {
            return 0;
        }
        int leftDepth = depth(root.left);
        if (leftDepth == -1) return -1;
        int rightDepth = depth(root.right);
        if (rightDepth == -1) return -1;
        if (leftDepth - rightDepth > 1 || rightDepth - leftDepth > 1) return -1;
        return Math.max(leftDepth, rightDepth) + 1;
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