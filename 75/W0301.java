public class W0301 {
    // 试题
    // leetcode-57
    // https://leetcode.cn/problems/insert-interval/
    public static void main(String[] args) {
        System.out.println("result: " + insert(new int[][]{{1, 5}}, new int[]{6, 8}));
    }

    public static int[][] insert(int[][] intervals, int[] newInterval) {
        if (intervals.length == 0) {
            return new int[][]{newInterval};
        }
        List<int[]> cache = new ArrayList<>();
        int size = intervals.length;
        int mixPoint = 0;
        boolean mixFlag = false;
        for (int i = 0; i < size; i++) {
            int[] cur = intervals[i];
            if (cur[1] < newInterval[0]) {
                cache.add(cur);
                mixPoint++;
                continue;
            }
            if (cur[0] > newInterval[1]) {
                cache.add(newInterval);
                cache.add(cur);
                mixPoint++;
                mixFlag = true;
            }
            break;
        }
        if (mixFlag) {
            return insertRemain(intervals, mixPoint, cache);
        } else if (mixPoint == size) {
            cache.add(newInterval);
        } else {
            int[] mixInterval = new int[]{intervals[mixPoint][0], intervals[mixPoint][1]};
            if (mixInterval[0] > newInterval[0]) {
                mixInterval[0] = newInterval[0];
            }
            if (mixInterval[1] < newInterval[1]) {
                mixInterval[1] = newInterval[1];
            }
            for (int i = mixPoint + 1; i < size; i++) {
                int[] cur = intervals[i];
                if (mixInterval[1] >= cur[0] && mixInterval[1] <= cur[1]) {
                    mixInterval[1] = cur[1];
                    cache.add(mixInterval);
                    return insertRemain(intervals, i + 1, cache);
                } else if (mixInterval[1] < cur[0]) {
                    cache.add(mixInterval);
                    cache.add(cur);
                    return insertRemain(intervals, i + 1, cache);
                }
            }
            cache.add(mixInterval);
        }
        return cache.toArray(new int[cache.size()][]);
    }

    public static int[][] insertRemain(int[][] intervals, int point, List<int[]> cache) {
        for (int i = point; i < intervals.length; i++) {
            cache.add(intervals[i]);
        }
        return cache.toArray(new int[cache.size()][]);
    }
}
