import Comparator from "../../comparator.js";
import { DoublyLinkedListNode } from "../DoublyLinkedListNode.js";

export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;

    this.compare = new Comparator()
  }

  append(value) {
    const node = new DoublyLinkedListNode(value)
    if(!this.head) {
      this.head = node;
      this.tail = node;
      return this;
    }


    this.tail.next = node;

    node.previous = this.tail;

    this.tail= node;
   
    this.size++;
    return this;
    
  }


  prepend(value) {
    const node = new DoublyLinkedListNode(value)
    if(!this.head.next) {
      this.head = node;
      return this;
    }

    node.next = this.head;
    this.head.previous = node

    this.head = node;

    this.size++;
    return this;

  }

  

}