public class W0202 {
    // 试题
    // leetcode-383
    // https://leetcode.cn/problems/ransom-note/
    public static void main(String[] args) {
        System.out.println("result: " + oMAndN("aa", "ab"));
    }

    // 时间复杂度 O(m+n)
    public static boolean oMAndN(String ransomNote, String magazine) {
        int ransomSize = ransomNote.length();
        int magazineSize = magazine.length();
        if (ransomSize > magazineSize) return false;
        int[] map = new int[26];
        for (int i = 0; i < magazineSize; i++) {
            map[magazine.charAt(i) - 'a']++;
        }
        for (int j = 0; j < ransomSize; j++) {
            map[ransomNote.charAt(j) - 'a']--;
            if (map[ransomNote.charAt(j) - 'a'] < 0) return false;
        }
        return true;
    }
}