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
        fill(set, image, sr, sc, defaultColor, color);
        for (String s : set) {
            String[] ss = s.split(",");
            image[Integer.parseInt(ss[0])][Integer.parseInt(ss[1])] = color;
        }
        return image;
    }

    public static void fill(Set<String> set, int[][] image, int sr, int sc, int defaultColor, int color) {
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
            fill(set, image, sr + 1, sc, defaultColor, color);
        }
        if (image[sr].length > sc + 1 && image[sr][sc + 1] == defaultColor) {
            fill(set, image, sr, sc + 1, defaultColor, color);
        }
        if (sr - 1 >= 0 && image[sr - 1][sc] == defaultColor) {
            fill(set, image, sr - 1, sc, defaultColor, color);
        }
        if (sc - 1 >= 0 && image[sr][sc - 1] == defaultColor) {
            fill(set, image, sr, sc - 1, defaultColor, color);
        }
    }
}
