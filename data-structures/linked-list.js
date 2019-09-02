/*
  LinkedList
  Dynamic data structure :  add or remove elements at ease and grow as needed.
  Elements are stored sequentially, but not contiguously
*/

const Node = value => ({
  value,
  next: null
});

const LinkedList = {
  head: null,
  tail: null,
  count: 0,
  addFirst(value) {
    // Create a node for the value to store
    const node = Node(value);

    if (this.head === null) {
      // If the head is empty then set the unique node to head
      this.head = node;

      // and tail
      this.tail = node;
    } else {
      // Otherwise, update the node to append next node the the old head
      node.next = this.head;

      // The node to append is the new head
      this.head = node;
    }

    this.count++;
  },
  addLast(value) {
    // Create a node for the value to store
    const node = Node(value);

    if (this.head === null) {
      // If the head is empty then set the unique node to head
      this.head = node;

      // and tail
      this.tail = node;
    } else {
      // Otherwise, update the old tail next node to the node to append
      this.tail.next = node;

      // The node to append is the new tail
      this.tail = node;
    }

    this.count++;
  },
  removeFirst() {
    this.head = this.head.next;
    this.count--;
  },
  removeLast() {
    this.tail = this.tail.next;
    this.count--;
  },
  contains(value) {
    let currentNode = this.head;

    // Iterate all the nodes until trying to find one having the given value
    while (currentNode !== null) {
      if (currentNode.value === value) {
        // Returns true if the value is found
        return true;
      }

      currentNode = currentNode.next;
    }

    // Given value not found, returns false
    return false;
  },
  getFirst() {
    return this.head.value;
  },
  getLast() {
    return this.tail.value;
  },
  size() {
    return this.count;
  },
  isEmpty() {
    return this.count === 0;
  },
  getAt(index) {
    // Throw an error if index out of boundaries
    if (index < 0 || index > this.count) {
      throw new Error("Out of boundaries !");
    }

    // Throw an error if empty list
    if (this.isEmpty()) {
      throw new Error("The list is empty !");
    }

    // Simply returns the head if given index is 0
    if (index === 0) {
      return this.head;
    }

    let i = 0;
    let currentNode = this.head;

    // Iterate all the nodes until the given index
    while (i < index) {
      currentNode = currentNode.next;
      i++;
    }

    return currentNode.value;
  },
  removeAt(index) {
    // Throw an error if index out of boundaries
    if (index < 0 || index > this.count) {
      throw new Error("Out of boundaries !");
    }

    // Throw an error if empty list
    if (this.isEmpty()) {
      throw new Error("The list is empty !");
    }

    // Simply remove the head if given index is 0
    if (index === 0) {
      this.head = this.head.next;
      this.count--;
      return;
    }

    let i = 0;
    let currentNode = this.head;
    let previousNode;

    // Iterate all the nodes until the given index
    while (i < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      i++;
    }

    // Remove the current node by linking its previous and its next together
    previousNode.next = currentNode.next;

    // Update the tail if this node is the last element
    if (previousNode.next === null) {
      this.tail = previousNode;
    }

    this.count--;
  },
  removeLast() {
    this.removeAt(this.count - 1);
  },
  print() {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      nodes.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return nodes.join(" -> ");
  }
};

const createLinkedList = () => Object.create(LinkedList);
