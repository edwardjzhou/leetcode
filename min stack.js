155. Min Stack
Easy

3000

293

Add to List

Share
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

    push(x)-- Push element x onto stack.
        pop()-- Removes the element on top of the stack.
            top()-- Get the top element.
                getMin()-- Retrieve the minimum element in the stack.


                    Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); --> Returns - 3.
minStack.pop();
minStack.top(); --> Returns 0.
minStack.getMin(); --> Returns - 2.

/**
 * initialize your data structure here.
 */
//trick is to remember what minimum was when you entered 
//so you can use 2 stacks: 1 normal stack and 1 with only elements pushed into the normal stack that were smaller
// than the top of itself

var MinStack = function() {
    this.stack = []
    // this.stack = []
    // this.minstack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (!this.stack.length) this.stack.push({value:x, minimum: x})
    else this.stack.push({value:x, minimum: x < (temp = this.stack[this.stack.length-1][`minimum`])  ? x : temp })


    // this.stack.push(x)
    // !this.minstack.length || x <= this.minstack[this.minstack.length-1] ? this.minstack.push(x) : null
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
    // this.stack.pop() === this.minstack[this.minstack.length-1] ? this.minstack.pop() : null
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1][`value`]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length -1][`minimum`]
    // return this.minstack[this.minstack.length-1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */