// LIFO, ADT, push pop
// for steps traceback like browser history tracking, undo operation when typing and Nodejs eventloop

// push,pop,peek,isEmpty,size O(1)

// stack implementation using array
class Stack {
  constructor() {
    this.items = [];
  }
  push(value) {
    this.items[this.items.length] = value;
  }
  pop() {
    if (this.isEmpty()) return undefined;
    const topIndex = this.items.length - 1;
    const removed = this.items[topIndex];
    this.items.length = topIndex;
    return removed;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items);
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.peek());
