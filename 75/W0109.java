public class W0109 {
    // 试题
    // leetcode-733
    // https://leetcode.cn/problems/flood-fill/
    public static void main(String[] args) {
        System.out.println("result: " + floodFill(new int[][]{{1, 1, 1}, {1, 1, 0}, {1, 0, 1}}, 1, 1, 2));
    }

    public static int[][] floodFill(int[][] image, int sr, int sc, int color) {
        int defaultColor = image[sr][sc];
        Set<String> set = new HashSet<>();
//        dfs(set, image, sr, sc, defaultColor);
        bfs(set, image, sr, sc, defaultColor);
        for (String s : set) {
            System.out.println(s);
            String[] ss = s.split(",");
            image[Integer.parseInt(ss[0])][Integer.parseInt(ss[1])] = color;
        }
        return image;
    }

    public static void bfs(Set<String> set, int[][] image, int sr, int sc, int defaultColor) {
        Queue<int[]> queue = new LinkedList<>();
        queue.offer(new int[]{sr, sc});
        set.add(sr + "," + sc);
        while (!queue.isEmpty()) {
            int[] position = queue.poll();
            System.out.println("check: position i: " + position[0] + ", j: " + position[1]);
            if (image.length > position[0] + 1 && image[position[0] + 1][position[1]] == defaultColor) {
                int i = position[0] + 1;
                int j = position[1];
                if (!set.contains(i + "," + j)) {
                    queue.offer(new int[]{i, j});
                    set.add(i + "," + j);
                }
            }
            if (image[position[0]].length > (position[1] + 1) && image[position[0]][position[1] + 1] == defaultColor) {
                int i = position[0];
                int j = position[1] + 1;
                if (!set.contains(i + "," + j)) {
                    queue.offer(new int[]{i, j});
                    set.add(i + "," + j);
                }
            }
            if (position[0] - 1 >= 0 && image[position[0] - 1][position[1]] == defaultColor) {
                int i = position[0] - 1;
                int j = position[1];
                if (!set.contains(i + "," + j)) {
                    queue.offer(new int[]{i, j});
                    set.add(i + "," + j);
                }
            }
            if (position[1] - 1 >= 0 && image[position[0]][position[1] - 1] == defaultColor) {
                int i = position[0];
                int j = position[1] - 1;
                if (!set.contains(i + "," + j)) {
                    queue.offer(new int[]{i, j});
                    set.add(i + "," + j);
                }
            }
        }
    }

    public static void dfs(Set<String> set, int[][] image, int sr, int sc, int defaultColor) {
        if (image[sr][sc] == defaultColor) {
            if (set.contains(sr + "," + sc)) {
                return;
            } else {
                set.add(sr + "," + sc);
            }
        } else {
            return;
        }
        if (image.length > sr + 1 && image[sr + 1][sc] == defaultColor) {
            dfs(set, image, sr + 1, sc, defaultColor);
        }
        if (image[sr].length > sc + 1 && image[sr][sc + 1] == defaultColor) {
            dfs(set, image, sr, sc + 1, defaultColor);
        }
        if (sr - 1 >= 0 && image[sr - 1][sc] == defaultColor) {
            dfs(set, image, sr - 1, sc, defaultColor);
        }
        if (sc - 1 >= 0 && image[sr][sc - 1] == defaultColor) {
            dfs(set, image, sr, sc - 1, defaultColor);
        }
    }
}
