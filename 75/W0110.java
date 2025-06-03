public class W0110 {
    // 试题
    // leetcode-235
    // https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/
    // 注释：搜索二叉树是有大小顺序的
    public static void main(String[] args) {
        System.out.println("result: " + lowestCommonAncestor(new TreeNode(1), new TreeNode(2), new TreeNode(3)));
    }

    public static TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        List<TreeNode> pList = new ArrayList<>();
        List<TreeNode> qList = new ArrayList<>();
        search(root, p, pList);
        search(root, q, qList);
        int minSize = Math.min(pList.size(), qList.size());
        for (int i = 0; i < minSize; i++) {
            if (pList.get(i).val != qList.get(i).val) return pList.get(i - 1);
        }
        return pList.get(minSize - 1);
    }

    public static void search(TreeNode root, TreeNode target, List<TreeNode> positionList) {
        positionList.add(root);
        if (root.val == target.val) return;
        if (root.val > target.val) {
            search(root.left, target, positionList);
        } else {
            search(root.right, target, positionList);
        }
    }

    public static TreeNode solution_2(TreeNode root, TreeNode p, TreeNode q) {
        while (true) {
            if (root.val > p.val && root.val > q.val) {
                root = root.left;
            } else if (root.val < p.val && root.val < q.val) {
                root = root.right;
            } else {
                return root;
            }
        }
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

