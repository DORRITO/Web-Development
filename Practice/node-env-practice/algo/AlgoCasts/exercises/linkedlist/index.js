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
    this.head = new Node(data, this.head);
  }

  size() {
    let num = 0;
    let node = this.head;

    while (node) {
      num++;
      node = node.next;
    }
    return num;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    if (node) {
      while (node) {
        if (!node.next) {
          return node;
        }
        node = node.next;
      }
    }
  }

  clear() {
    return (this.head = null);
  }

  removeFirst() {
    if (this.head) {
        this.head = this.head.next;
    }
  }
}

module.exports = { Node, LinkedList };
