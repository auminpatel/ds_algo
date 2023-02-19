import LinkedList from "../linked_lists/head_tails/LinkedLists";

export class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty () {
    return !this.linkedList.head;
  }

  push () {
    return this.linkedList.prepend(value);
  }

  pop () {
    return this.linkedList.deleteHead();
  }

  peek() {
    if(this.isEmpty()) {
      return;
    }

    return this.linkedList.head.value;
  }

  toArray() {
    this.linkedList.toArray()
  }

  toString(callback) {
    return this.linkedList.toString(callback);
  }

}