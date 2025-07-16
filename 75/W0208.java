public class W0208 {
    // 试题
    // leetcode-543
    // https://leetcode.cn/problems/diameter-of-binary-tree/
    public static void main(String[] args) {
        System.out.println("result: " + diameterOfBinaryTree(null));
    }

    public static int diameterOfBinaryTree(TreeNode root) {
        List<Integer> maxDeep = new ArrayList<>();
        maxDeep.add(0);
        search(root, maxDeep);
        return maxDeep.get(0);
    }

    public static int search(TreeNode root, List<Integer> maxDeep) {
        if (root == null) {
            return 0;
        }
        int leftDeep = search(root.left, maxDeep);
        int rightDeep = search(root.right, maxDeep);
        int deep = Math.max(leftDeep, rightDeep) + 1;
        maxDeep.set(0, Math.max(leftDeep + rightDeep, maxDeep.get(0)));
        return deep;
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