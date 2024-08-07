'use strict';
/**
 * NO.232
 * 用栈实现队列
 * 请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：
 * 实现 MyQueue 类：
 * void push(int x) 将元素 x 推到队列的末尾
 * int pop() 从队列的开头移除并返回元素
 * int peek() 返回队列开头的元素
 * boolean empty() 如果队列为空，返回 true ；否则，返回 false
 * 说明：
 * 你只能使用标准的栈操作 —— 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
 * 你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
 * 进阶：
 * 你能否实现每个操作均摊时间复杂度为 O(1) 的队列？换句话说，执行 n 个操作的总时间复杂度为 O(n) ，
 * 即使其中一个操作可能花费较长时间。
 */
var MyQueue = function () {
    this.stack = [];
    this.queue = [];
    this.start = null;
    this.stackLength = 0;
    this.queueLength = 0;
    return this;
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    if (this.stackLength === 0 && this.queueLength === 0) this.start = x;
    // 如果队列有值，则先还原栈
    while (this.queueLength) {
        this.stack.push(this.queue.pop());
        this.stackLength++;
        this.queueLength--;
    }
    this.stack.push(x);
    this.stackLength++;
    return null;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    // 如果栈有值，则先还原队列
    while (this.stackLength) {
        this.queue.push(this.stack.pop());
        this.stackLength--;
        this.queueLength++;
    }
    let returnVal = this.queue.pop();
    this.start = this.queue.pop();
    this.queue.push(this.start);
    this.queueLength--;
    return returnVal;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    return this.start;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return !this.queueLength && !this.stackLength;
};