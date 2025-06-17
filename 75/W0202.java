public class W0202 {
    // 试题
    // leetcode-383
    // https://leetcode.cn/problems/ransom-note/
    public static void main(String[] args) {
        System.out.println("result: " + o2m("aa", "ab"));
    }

    // 时间复杂度 O(2m)
    public static boolean o2m(String ransomNote, String magazine) {
        int ransomSize = ransomNote.length();
        int magazineSize = magazine.length();
        if (ransomSize > magazineSize) return false;
        Map<Character, Integer> map = new HashMap<>();
        for (int i = 0; i < magazineSize; i++) {
            if (map.containsKey(magazine.charAt(i))) {
                map.put(magazine.charAt(i), map.get(magazine.charAt(i)) + 1);
            } else {
                map.put(magazine.charAt(i), 1);
            }
            if (i >= ransomSize) continue;
            if (map.containsKey(ransomNote.charAt(i))) {
                map.put(ransomNote.charAt(i), map.get(ransomNote.charAt(i)) - 1);
            } else {
                map.put(ransomNote.charAt(i), -1);
            }
        }
        for (Map.Entry<Character, Integer> entry : map.entrySet()) {
            if (entry.getValue() < 0) return false;
        }
        return true;
    }
}