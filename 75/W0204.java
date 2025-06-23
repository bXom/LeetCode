public class W0204 {
    // 试题
    // leetcode-409
    // https://leetcode.cn/problems/longest-palindrome/
    public static void main(String[] args) {
        System.out.println("result: " + longestPalindrome("ghjkkbv"));
    }

    public static int longestPalindrome(String s) {
        int[] bigLetters = new int[26];
        int[] smallLetters = new int[26];
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) >= 'A' && s.charAt(i) <= 'Z') {
                bigLetters[s.charAt(i) - 'A']++;
            } else {
                smallLetters[s.charAt(i) - 'a']++;
            }
        }
        int len = 0;
        boolean single = false;
        for (int i = 0; i < 26; i++) {
            if (bigLetters[i] % 2 != 0 || smallLetters[i] % 2 != 0) {
                single = true;
            }
            len += bigLetters[i] / 2 * 2;
            len += smallLetters[i] / 2 * 2;
        }
        if (single) len++;
        return len;
    }
}