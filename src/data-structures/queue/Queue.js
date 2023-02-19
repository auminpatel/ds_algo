import { LinkedList } from "../linked_lists/head_tails/LinkedLists";

export class Queue{
  constructor() {
    this.linkedList = new LinkedList();
  }


  isEmpty () {
    if(!this.linkedList.head) {
      return true
    }
    return false
  }

  enqueue(value) {
     this.linkedList.prepend(value);
     return this;
  }

  dequeue() {
    if(this.isEmpty()) {
      return false
    }
    this.linkedList.deleteTail()

    return true;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.linkedList.head.value;
  }

  toString(callback) {
    return this.linkedList.toString(callback);
  }
}