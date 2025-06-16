public class W0113 {
    // 试题
    // leetcode-232
    // https://leetcode.cn/problems/implement-queue-using-stacks/
    public static void main(String[] args) {
        System.out.println("result: ");
    }

    public static class MyQueue {
        private final Deque<Integer> inQue;
        private final Deque<Integer> outQue;

        public MyQueue() {
            this.inQue = new ArrayDeque<>();
            this.outQue = new ArrayDeque<>();
        }

        public void push(int x) {
            this.inQue.push(x);
        }

        public int pop() {
            if (this.outQue.isEmpty()) {
                this.in2Out();
            }
            return this.outQue.pop();
        }

        public int peek() {
            if (this.outQue.isEmpty()) {
                this.in2Out();
            }
            return this.outQue.peek();
        }

        public void in2Out() {
            while (!inQue.isEmpty()) {
                outQue.push(inQue.pop());
            }
        }

        public boolean empty() {
            return this.inQue.isEmpty() && this.outQue.isEmpty();
        }
    }
}