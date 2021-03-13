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
    removeLast(prevNode = null, currentNode = this.head) {
        if (!currentNode) {
            this.head = null;
            return;
        }
        if (!currentNode.next) {
            if (!!prevNode) {
                prevNode.next = null;
                return;
            } else {
                this.head = null;
                return;
            }
        }
        this.removeLast(currentNode, currentNode.next);
    }
    insertLast(data, node = this.head) {
        if (!node) {
            this.head = new Node(data);
            return;
        }
        if (!node.next) {
            node.next = new Node(data);
            return;
        } else {
            this.insertLast(data, node.next);
        }
    }
    getAt(index, node = this.head, counter = 0) {
        if (!node) {
            return null;
        }
        if (counter === index) {
            return node;
        }
        counter++;
        return this.getAt(index, node.next, counter);
    }
}

module.exports = { Node, LinkedList };
