// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(data) {
        if (!this.head) {
            this.head = new Node(data);
        } else {
            this.head = new Node(data, this.head);
        }
    }
    size(node = this.head, n = 0) {
        if (!node) {
            return n;
        }
        n++;
        return this.size(node.next, n);
    }
    getFirst() {
        return this.head;
    }
    getLast(node = this.head) {
        if (!!node && !node.next) {
            return node;
        }
        return this.getLast(node.next);
    }
    clear() {
        this.head = null;
    }
    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }
    removeLast(previousNode = null, node = this.head) {
        if (!node) {
            this.head = null;
            return;
        }
        if (!node.next) {
            if (!previousNode) {
                this.head = null;
                return;
            }
            previousNode.next = null;
            this.head = previousNode;
            return;
        }
        this.removeLast(node, node.next);
    }
}

module.exports = { Node, LinkedList };
