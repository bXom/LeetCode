public class W0105 {
    // 试题
    // leetcode-125
    // https://leetcode.cn/problems/valid-palindrome/description/
    public static void main(String[] args) {
        System.out.println("result: " + solution_1("a bcc！ba"));
        System.out.println("result: " + solution_2("a bcc！ba"));
    }

    public static boolean solution_1(String s) {
        int indexI = 0;
        int indexJ = s.length() - 1;
        do {
            String i = String.valueOf(s.charAt(indexI)).toLowerCase();
            if (!i.matches("[a-zA-Z0-9]")) {
                indexI++;
                continue;
            }
            String j = String.valueOf(s.charAt(indexJ)).toLowerCase();
            if (!j.matches("[a-zA-Z0-9]")) {
                indexJ--;
                continue;
            }
            if (i.equals(j)) {
                indexI++;
                indexJ--;
            } else {
                return false;
            }
        } while (indexI < indexJ);
        return true;
    }

    public static boolean solution_2(String s) {
        s = s.toLowerCase();
        s = s.replaceAll("[^a-zA-Z0-9]", "");
        int len = s.length();
        for (int i = 0; i < len / 2; i++) {
            if (s.charAt(i) != s.charAt(len - i - 1)) {
                return false;
            }
        }
        return true;
    }
}