const LinkedList = require('./LinkedList');
class Queue {
  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  isEmpty() {
    return this.size === 0;
  }

  enqueue(data) {
    if (this.hasRoom()) {
      this.queue.addToTail(data);
      this.size++;
      console.log(`Added ${data} to queue! Queue size is now ${this.size}.`);
    } else {
      throw new Error('Queue is full!');
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      const data = this.queue.removeHead();
      this.size--;
      console.log(`Removed ${data} from queue! Queue size is now ${this.size}.`);
      return data;
    } else {
      throw new Error('Queue is empty!');
    }
  }

  show() {
    if (!this.isEmpty()) {
      return this.queue.head.data;
    } else {
      return null;
    }
  }

  all() {
    let queueArray = [];
    if (!this.isEmpty()) {
      let currentNode = this.queue.head;
      while (currentNode) {
        queueArray.push(currentNode.data);
        currentNode = currentNode.next;
      }
      return queueArray;
    } else {
      return null;
    }
  }
}

module.exports = Queue;
