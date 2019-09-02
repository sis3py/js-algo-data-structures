/*
  Binary Search tree
  Binary tree in which nodes which have lesser value are stored on the left while the nodes with higher value are stored 
  at the right
*/

const Node = value => ({
  value,
  right: null,
  left: null
});

const BinarySearchtree = {
  root: null,
  insert(value) {
    // Create a node for the value to store
    const node = Node(value);

    // If the root is empty then set the node to root position
    if (!this.root) {
      this.root = node;
      return this;
    }

    // Else find the right position to insert by traversing the tree
    let currentNode = this.root;
    while (currentNode !== null) {
      // Duplicates are ignored
      if (currentNode.value === value) {
        return;
      }

      /* Handle left node insert */

      // If the value < current node's value, the insertion must be on the left
      if (value < currentNode.value) {
        // Check if a node is already existing on the left
        if (!currentNode.left) {
          // The left node will be the node to insert
          currentNode.left = node;
        } else {
          // Move the cursor to the left node
          currentNode = currentNode.left;
        }
      }

      /* Handle right node insert */

      // If the value > current node's value, the insertion must be on the right
      if (value > currentNode.value) {
        // Check if a node is already existing on the right
        if (!currentNode.right) {
          // The right node will be the node to insert
          currentNode.right = node;
        } else {
          // Move the cursor to the right node
          currentNode = currentNode.right;
        }
      }
    }
  },
  find(value) {
    // If the root is empty then return
    if (!this.root) {
      return;
    }

    // Else find the requested value by traversing the tree
    let currentNode = this.root;
    while (currentNode !== null) {
      // If the current node's value if the one requested, return its value
      if (currentNode.value === value) {
        return currentNode.value;
      }

      // Move the cursor to the left or right node depending on the value / current node's value
      currentNode =
        value < currentNode.value ? currentNode.left : currentNode.right;
    }
  },
  contains(value) {
    return this.find(value) !== undefined;
  },
  min() {
    // If the root is empty then return
    if (!this.root) {
      return;
    }

    // Find the min value by traversing the tree to the deepest left
    let currentNode = this.root;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }

    return currentNode.value;
  },
  max() {
    // If the root is empty then return
    if (!this.root) {
      return;
    }

    // Find the max value by traversing the tree to the deepest right
    let currentNode = this.root;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }

    return currentNode.value;
  },
  bfs() {
    let node = this.root;
    const queue = [node];
    const data = [];

    while (queue.length) {
      node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }

      data.push(node.value);
    }

    return data;
  },
  dfsPreOrder() {
    const data = [];
    const traverse = node => {
      data.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);
    return data;
  },
  dfsPostOrder() {
    const data = [];

    const traverse = node => {
      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }

      data.push(node.value);
    };

    traverse(this.root);
    return data;
  },
  dfsInOrder() {
    const data = [];

    const traverse = node => {
      if (node.left) {
        traverse(node.left);
      }

      data.push(node.value);

      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);
    return data;
  }
};

const createBinarySearchTree = () => Object.create(BinarySearchtree);
