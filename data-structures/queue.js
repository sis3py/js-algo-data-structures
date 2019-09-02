/* 
  Queue
  Performs addition of elements at the end of the queue and removal of elements from the front of the queue.
  FIFO(First in First Out). 
*/

const Queue = {
  values: [],
  enqueue(value) {
    // Add an element at the rear of the queue
    this.values.push(value);
  },
  dequeue() {
    // Remove the oldest element from the queue
    if (this.isEmpty()) {
      throw new Error("Cannot dequeue an empty list !");
    }
    return this.values.shift();
  },
  isEmpty() {
    return this.values.length === 0;
  },
  peek() {
    // Returns the oldest element of the queue without removing it
    if (!this.isEmpty()) {
      return this.values[0];
    }
  },
  print() {
    return this.values.join(" <- ");
  }
};

const createQueue = () => Object.create(Queue);
