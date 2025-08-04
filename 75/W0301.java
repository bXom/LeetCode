public class W0301 {
    // 试题
    // leetcode-57
    // https://leetcode.cn/problems/insert-interval/
    public static void main(String[] args) {
        System.out.println("result: " + insert(new int[][]{{1, 5}}, new int[]{6, 8}));
    }

    public static int[][] insert(int[][] intervals, int[] newInterval) {
        List<int[]> list = new ArrayList<>();
        int index = 0;
        int size = intervals.length;
        while (index < size) {
            int[] cur = intervals[index];
            if (cur[0] < newInterval[0] && cur[1] < newInterval[0]) {
                list.add(cur);
                index++;
                continue;
            }
            break;
        }
        while (index < size) {
            int[] cur = intervals[index];
            if (newInterval[1] >= cur[0]) {
                newInterval[0] = Math.min(newInterval[0], cur[0]);
                newInterval[1] = Math.max(newInterval[1], cur[1]);
                index++;
            } else {
                break;
            }
        }
        list.add(newInterval);
        while (index < size) {
            int[] cur = intervals[index];
            list.add(cur);
            index++;
        }
        return list.toArray(new int[list.size()][]);
    }
}
