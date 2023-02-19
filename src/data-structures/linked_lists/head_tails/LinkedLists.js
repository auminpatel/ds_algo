import Comparator from "../../comparator";
import { LinkedListNode } from "../LinkedListNode";

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.compare = new Comparator()
  }

  append(value) {
    const newNode = new LinkedListNode(value)
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    let currentNode = this.head;
    while(currentNode.next)
    {
      currentNode = currentNode.next;
    }

    currentNode.next  = newNode;

    this.tail = newNode;
    this.size++;

    return this;
  }

  prepend(value){
    const newNode = new LinkedListNode(value)
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    newNode.next = this.head;

    this.head = newNode;
    this.size++;

    return this;
  }

  insert(value, index) {
    const rawIndex = index<0 ? 0 : index;
    if(rawIndex=== 0) {
      this.prepend(value);
      return this;
    } 
    else if (rawIndex  >=  this.size) {
      this.append(value);
      return this
    }

    let newNode = new LinkedListNode(value);
    let currentNode = this.head.next;
    let count = 1;
    let prev = this.head

    while(currentNode) {

      if(this.compare.equal(count, index)){
        break;
      }
      count++;
      prev = currentNode;
      currentNode = currentNode.next;
    }
    prev.next = newNode 
    newNode.next = currentNode;

    return this;
  }

  deleteHead() {
    if(!this.head) {
      return false;
    }

    const deleteHead =  this.head
    if(this.head.next) {
      this.head = this.head.next;
    
    }
    else {
      this.head = null;
      this.tail= null;

    }

    return deleteHead;

  }

  deleteTail() {

    if(!this.tail) {
      return false;
    }

    const deletedTail = this.tail;

    if(this.tail === this.head) {
      this.head = null;
      this.tail = null;
      deletedTail
      return deletedTail
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;

    return deletedTail;

  }

  delete(value) {
    let deleteNode;
    if(!this.head) {
      return false;
    }

    while(this.head && this.compare.equal(value, this.head.value)) {
      deleteNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if(currentNode) {
    while(currentNode.next){
      if(this.compare.equal(currentNode.next.value, value)){
        deleteNode = currentNode.next;
        currentNode.next = currentNode.next.next
      }
      else {
        currentNode = currentNode.next;
      }

    }
    
  }
  if (this.compare.equal(this.tail.value, value)) {
    this.tail = currentNode;
  }
  
  return deletedNode;


  }


  reverse() {
    let currentNode = this.head;
    let prev = null ;
    let nextNode = null;

    while(currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prev;

      prev = currentNode ;

      currentNode = nextNode;
    }

    return this;
  }

}