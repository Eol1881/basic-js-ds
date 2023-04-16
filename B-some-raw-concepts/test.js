console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {

  constructor() {
    this.headValue = undefined;
    this.next = null;
  }

  getUnderlyingList() {
    return this;
  }

  enqueue(value) {
    if (!this.headValue) {
      this.headValue = value;
      return;
    }

    let currentNode = this;
    const node = new ListNode(value);
    node.value = value;

    while (currentNode.next !== null ) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
  }

  dequeue() {
    let decapitatedHead = this.headValue;
    this.headValue = this.next.value;
    this.next = this.next.next;
    return decapitatedHead;
  }
}

const queue = new Queue();

// console.log(queue.enqueue(1) )// adds the element to the queue
// console.log(queue.enqueue(3) )// adds the element to the queue
// console.log(queue.dequeue() )// returns the top element from queue and deletes it, returns 1
// console.log(queue.getUnderlyingList() )// returns { value: 3, next: null }

queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)

console.log(queue);

console.log( queue.dequeue()  ) // 5;
// console.log( queue.dequeue()  ) // 6;

console.log(queue);