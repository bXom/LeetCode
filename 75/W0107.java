public class W0107 {
    // 试题
    // leetcode-242
    // https://leetcode.cn/problems/valid-anagram/description/
    public static void main(String[] args) {
        System.out.println("result: " + isAnagram("", ""));
    }

    public static boolean isAnagram(String s, String t) {
        int len = s.length();
        if (len != t.length()) return false;
        Map<String, Integer> map = new HashMap<>();
        for (int i = 0; i < len; i++) {
            String sVal = String.valueOf(s.charAt(i));
            String tVal = String.valueOf(t.charAt(i));
            if (map.containsKey(sVal)) {
                map.put(sVal, map.get(sVal) + 1);
            } else {
                map.put(sVal, 1);
            }
            if (map.containsKey(tVal)) {
                map.put(tVal, map.get(tVal) - 1);
            } else {
                map.put(tVal, -1);
            }
        }
        for (Map.Entry<String, Integer> entry : map.entrySet()) {
            if (entry.getValue() != 0) return false;
        }
        return true;
    }

}
