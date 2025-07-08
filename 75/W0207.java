public class W0207 {
    // 试题
    // leetcode-67
    // https://leetcode.cn/problems/add-binary/
    public static void main(String[] args) {
        System.out.println("result: " + addBinary("", ""));
    }

    public static String addBinary(String a, String b) {
        int aSize = a.length() - 1;
        int bSize = b.length() - 1;
        int oneMore = 0;
        StringBuilder resultBuilder = new StringBuilder();
        while (aSize >= 0 && bSize >= 0) {
            int aStr = Integer.parseInt(a.charAt(aSize--) + "");
            int bStr = Integer.parseInt(b.charAt(bSize--) + "");
            int sum = aStr + bStr + oneMore;
            setSum(sum, resultBuilder);
            oneMore = sum / 2;
        }
        while (aSize >= 0) {
            int aStr = Integer.parseInt(a.charAt(aSize--) + "");
            int sum = aStr + oneMore;
            setSum(sum, resultBuilder);
            oneMore = sum / 2;
        }
        while (bSize >= 0) {
            int bStr = Integer.parseInt(b.charAt(bSize--) + "");
            int sum = bStr + oneMore;
            setSum(sum, resultBuilder);
            oneMore = sum / 2;
        }
        if (oneMore == 1) {
            resultBuilder.append("1");
        }
        return resultBuilder.reverse().toString();
    }

    public static void setSum(int sum, StringBuilder sumStr) {
        switch (sum) {
            case 2:
                sumStr.append("0");
                break;
            case 3:
            case 1:
                sumStr.append("1");
                break;
            default:
                break;
        }
    }
}