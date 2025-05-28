public class W0106 {
    // 试题
    // leetcode-226
    // https://leetcode.cn/problems/invert-binary-tree/description/
    public static void main(String[] args) {
        System.out.println("result: " + invertTree(new TreeNode()));
    }

    public static TreeNode invertTree(TreeNode root) {
        if (root == null) return null;
        TreeNode left = invertTree(root.left);
        root.left = invertTree(root.right);
        root.right = left;
        return root;
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
