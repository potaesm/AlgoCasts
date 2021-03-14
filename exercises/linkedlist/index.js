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
    // insertFirst(data) {
    //     if (!this.head) {
    //         this.head = new Node(data);
    //     } else {
    //         this.head = new Node(data, this.head);
    //     }
    // }
    insertFirst(data) {
        this.insertAt(data, 0);
    }
    size(node = this.head, n = 0) {
        if (!node) {
            return n;
        }
        n++;
        return this.size(node.next, n);
    }
    // getFirst() {
    //     return this.head;
    // }
    getFirst() {
        return this.getAt(0);
    }
    // getLast(node = this.head) {
    //     if (!!node && !node.next) {
    //         return node;
    //     }
    //     return this.getLast(node.next);
    // }
    getLast() {
        return this.getAt(this.size() - 1);
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
    removeAt(index, prevNode = null, currentNode = this.head, counter = 0) {
        if (!currentNode) {
            return;
        }
        if (index === counter) {
            if (!prevNode) {
                this.head = currentNode.next;
                return;
            }
            prevNode.next = currentNode.next;
            return;
        }
        counter++;
        this.removeAt(index, currentNode, currentNode.next, counter);
    }
    insertAt(data, index, prevNode = null, currentNode = this.head, counter = 0) {
        if (!currentNode) {
            if (!prevNode) {
                // insertAt 0 of empty linkedList
                this.head = new Node(data);
                return;
            }
            // insertAt > End
            prevNode.next = new Node(data);
            return;
        }
        if (index === counter) {
            if (!prevNode) {
                // insertAt 0 of non-empty linkedList
                this.head = new Node(data, currentNode);
                return;
            }
            // insertAt index in the middle
            prevNode.next = new Node(data, currentNode);
            return;
        }
        counter++;
        this.insertAt(data, index, currentNode, currentNode.next, counter);
    }
    forEach(fn, node = this.head, counter = 0) {
        if (!!node) {
            fn(node, counter);
            if (!!node.next) {
                counter++;
                this.forEach(fn, node.next);
            }
        }
    }
    *[Symbol.iterator]() {
        let node = this.head;
        while (!!node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
