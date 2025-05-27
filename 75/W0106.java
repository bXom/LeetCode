public class W0106 {
    // 试题
    // leetcode-226
    // https://leetcode.cn/problems/invert-binary-tree/description/
    public static void main(String[] args) {
        System.out.println("result: " + solution_1());
        System.out.println("result: " + solution_2());
    }

    public static TreeNode solution_1(TreeNode root) {
    }

    public static TreeNode solution_2(TreeNode root) {
    }

    public class TreeNode {
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