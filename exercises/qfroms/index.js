// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.inputStack = new Stack();
        this.outputStack = new Stack();
    }
    add(item) {
        this.inputStack.push(item);
    }
    remove() {
        while (!!this.inputStack.peek()) {
            this.outputStack.push(this.inputStack.pop());
        }
        const output = this.outputStack.pop();
        while (!!this.outputStack.peek()) {
            this.inputStack.push(this.outputStack.pop());
        }
        return output;
    }
    peek() {
        while (!!this.inputStack.peek()) {
            this.outputStack.push(this.inputStack.pop());
        }
        const output = this.outputStack.peek();
        while (!!this.outputStack.peek()) {
            this.inputStack.push(this.outputStack.pop());
        }
        return output;
    }
}

module.exports = Queue;
