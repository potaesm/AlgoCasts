// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    insert(data) {
        if (!this.data) {
            this.data = data;
            this.insert(data);
        } else {
            if (data < this.data) {
                if (!this.left) {
                    this.left = new Node(data);
                    return;
                } else {
                    this.left.insert(data);
                }
            }
            if (data > this.data) {
                if (!this.right) {
                    this.right = new Node(data);
                    return;
                } else {
                    this.right.insert(data);
                }
            }
            return;
        }
    }
    // contains(data, currentNode = this) {
    //     if (!!currentNode) {
    //         if (currentNode.data === data) {
    //             return currentNode;
    //         }
    //         if (currentNode.data < data) {
    //             return this.contains(data, currentNode.right);
    //         }
    //         if (currentNode.data > data) {
    //             return this.contains(data, currentNode.left);
    //         }
    //     }
    //     return null;
    // }
    contains(data) {
        if (this.data === data) {
            return this;
        }
        if (this.data < data && !!this.right) {
            return this.right.contains(data);
        }
        if (this.data > data && !!this.left) {
            return this.left.contains(data);
        }
        return null;
    }
}

module.exports = Node;
