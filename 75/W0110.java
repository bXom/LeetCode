public class W0110 {
    // 试题
    // leetcode-235
    // https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/
    public static void main(String[] args) {
        System.out.println("result: " + lowestCommonAncestor(new TreeNode(1), new TreeNode(2), new TreeNode(3)));
    }

    public static TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        return root;
    }

    public static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode(int x) {
            val = x;
        }
    }
}
