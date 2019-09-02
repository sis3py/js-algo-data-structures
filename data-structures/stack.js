/* 
   Stack 
   Data structure in which addition or removal of element follows a particular order.
   LIFO(Last in First Out) AND FILO(First in Last Out).
*/

const Stack = {
  values: [],
  push(value) {
    // Add an element on top of the stack
    this.values.push(value);
  },
  pop() {
    // Remove the last element (the one on top of the stack)
    if (this.isEmpty()) {
      throw new Error("Cannot pop an empty stack !");
    }
    return this.values.pop();
  },
  isEmpty() {
    return this.values.length === 0;
  },
  peek() {
    // Returns the last element (the one on top of the stack) without removing it
    return this.values[this.values.length - 1];
  },
  print() {
    return this.values.reverse().join("\n");
  }
};

const createStack = () => Object.create(Stack);
