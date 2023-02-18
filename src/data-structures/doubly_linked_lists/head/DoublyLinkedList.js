import Comparator from "../../comparator.js";
import { DoublyLinkedListNode } from "../DoublyLinkedListNode.js";

export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;

    this.compare = new Comparator()
  }


  append(value) {
    const node = new DoublyLinkedListNode(value)
    if(!this.head) {
      this.head = node;
      return this;
    }

    let current = this.head;

    while(current.next !== null) {
      current = current.next
    }

    current.next = node;
    node.previous = current;
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

  delete(value) {

    let deleteNode;
    if(!this.head)
    {
      return false;
    }

    let currentNode = this.head

    while(currentNode){
      // head !
      if(this.compare.equal(this.head.value, value)) {
        deleteNode = currentNode;
        this.head = deleteNode.next;
        this.head.previous = null;
      }

      else if(this.compare.equal(currentNode.value, value)){
        deleteNode = currentNode;
        if(currentNode.next !== null){
          currentNode.next.previous = deleteNode.previous;
          currentNode.previous.next =  deleteNode.next;
        }

        else {
          currentNode.previous.next = null
        }

      }

      currentNode = currentNode.next;

    }

    return deleteNode

  }


  insert(value , index) {
    const rawIndex = index<0 ? 0 : index;
   
      if(rawIndex === 0) {
        this.prepend(value)
        return this;
      }

      else if(index>this.size){
        this.append(value)
        return this;
      }

    let currentNode = this.head.next;
    let count = 1

    const newNode = new DoublyLinkedListNode(value);
    while(currentNode) {
      if(this.compare.equal(count, index)){

        newNode.next = currentNode;
        newNode.previous = currentNode.previous
        currentNode.previous.next = newNode;
        currentNode.previous = newNode;
        break



      }

      currentNode = currentNode.next; 
  }

  return this;




    
  }


  search(value = undefined, callback = undefined) {
    let current = this.head;
    while(!current.next) {
      // If callback is specified then try to find node by callback.
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      // If value is specified then try to compare by value..
      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }
      current = current.next;
    }

    return null;
  }

  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      // Store next node.
      nextNode = currNode.next;
      prevNode = currNode.previous;

      // Change next node of the current node so it would link to previous node.
      currNode.next = prevNode;
      currNode.previous = nextNode;

      // Move prevNode and currNode nodes one step forward.
      prevNode = currNode;
      currNode = nextNode;
    }

    // Reset head and tail.
    this.head = prevNode;

    return this;
  }
}