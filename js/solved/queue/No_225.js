'use strict';
/**
 * NO.225
 * 用队列实现栈
 * 请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。
 * 实现 MyStack 类：
 * void push(int x) 将元素 x 压入栈顶。
 * int pop() 移除并返回栈顶元素。
 * int top() 返回栈顶元素。
 * boolean empty() 如果栈是空的，返回 true ；否则，返回 false 。
 * 注意：
 * 你只能使用队列的基本操作 —— 也就是 push to back、peek/pop from front、size 和 is empty 这些操作。
 * 你所使用的语言也许不支持队列。 你可以使用 list （列表）或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
 */
var MyStack = function () {
    this.queue = [];
    this.length = 0;
    this.topV = null;
    return this;
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.queue.push(x);
    this.topV = x;
    this.length++;
    return true;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    let result = '';
    for (let i = 0; i < this.length; i++) {
        let nextV = this.queue.shift();
        if (i === (this.length - 2)) this.topV = nextV;
        if (i === (this.length - 1)) {
            result = nextV;
            break;
        }
        this.queue.push(nextV);
    }
    this.length--;
    return result;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.topV;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    if (this.length === 0) return true;
    return false;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */