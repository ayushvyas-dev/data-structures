// FIFO with front/head rear/tail
// enqueue:add at tail dequeue:remove at head
// process tasks in order or task scheduling
// callback queue in nodejs

// enqueue,dequeue,isEmpty,size,peek O(1)
// print O(1)
class Queue {
  constructor() {
    this.items = [];
    this.front = -1;
    this.rear = -1;
  }
  enqueue(element) {
    if (this.front == -1 && this.rear == -1) {
      this.front = this.rear = 0;
      this.items[this.front] = element;
    } else {
      this.items[++this.rear] = element;
    }
  }
  isEmpty() {
    return this.front == -1 && this.rear == -1;
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log('you should add elements first then dequeue');
      return;
    }

    if (this.front == this.rear) {
      this.front = this.rear = -1;
      this.items.length = 0;
    } else {
      const removed = this.items[this.front];
      this.front++;
      return removed;
    }
  }
  size() {
    if (this.isEmpty()) return 0;
    return this.rear - this.front + 1;
  }
  print() {
    if (this.isEmpty()) {
      console.log('the Queue is Empty : ');
    } else {
      console.log('-----Queue----');
      for (let i = this.front; i <= this.rear; i++) {
        console.log(this.items[i]);
      }
    }
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.dequeue();
console.log(queue.peek());
console.log(queue.isEmpty());

queue.print();
console.log(queue);
console.log(queue.size());
