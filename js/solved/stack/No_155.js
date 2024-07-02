'use strict';
/**
 * NO.155
 * 最小栈
 * 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
 * push(x) —— 将元素 x 推入栈中。
 * pop() —— 删除栈顶的元素。
 * top() —— 获取栈顶元素。
 * getMin() —— 检索栈中的最小元素。
 */
// 辅助栈，存储最小值
var MinStack = function () {
    // 数据栈
    this.stack = [];
    // 对应长度的最小值栈
    this.minStack = [];
    // 栈长度
    this.length = 0;
    return this;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.push(val);
    if (this.minStack.length === 0) {
        this.minStack.push(val);
    } else if (this.minStack[this.length - 1] > val) {
        this.minStack.push(val);
    } else {
        this.minStack.push(this.minStack[this.length - 1]);
    }
    this.length++;
    return null;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.length > 0) {
        this.length--;
        this.minStack.pop();
        return this.stack.pop();
    } else {
        return null;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minStack[this.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */