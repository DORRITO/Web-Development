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

  removeLast(){
      if (!this.head){
          return;
      }
      if(!this.head.next){
          return this.head = null;
      }

      let prev = this.head;
      let node = this.head.next;
      while(node.next){
          prev = node;
          node = node.next;
      }
      prev.next = null;
  }

  insertLast(data){
    let last = this.getLast();
      if(last){
        last.next = new Node(data);
      }else{
       this.head= new Node(data);
      }
  }

  getAt(index){
     let counter = 0;
     let node = this.head;
     while(node){
         if(counter === index){
            return node;
         }
         counter++
         node = node.next;
     }
     return null;
  }
}

module.exports = { Node, LinkedList };
