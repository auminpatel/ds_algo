import Comparator from "../comparator"
import { LinkedListNode } from "./LinkedListNode"

export class LinkedList {
  constructor(comparatorFunction) {
    this.head = null
    this.compare = new Comparator(comparatorFunction)
  }


  add(value)
  {
    const node = new  LinkedListNode(value);
    
    if (!this.head){
      this.head = node;
    }
    else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node
    }
    
  }


  prepend (value) {
    const node = new  LinkedListNode(value, this.head);
      this.head = node;
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


 delete(value) {
   if(!this.head) {
     return false
   }
   let deletedNode

   while(this.head && this.compare.equal(this.head.value, value)) {
     deleteNode = this.head;
     this.head = this.head.next
   }
   let current = this.head 

   if(!current) {
     while(!current.next) {
       if(this.compare.equal(current.next.value, value)) {
         deleteNode = current.next;
         current.next = current.next.next;
       }
       else {
         current=current.next;
       }
     }
   }

   return deletedNode;
 }


 deleteHead() {
  if(!this.head) {
    return false
  }

  if(this.head && this.compare.equal(this.head.value, value)) {
    deleteNode = this.head;
    this.head = this.head.next
  }

  return deleteNode
 }


 /**
  * 
  * @param {v*[]} values is array 
  */
 fromArray(values) {
  values.forEach(element => {
     this.add(element)
  });
  return this
 }

  /**
   * @return {LinkedListNode[]}
   */
   toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }


    /**
   * @param {function} [callback]
   * @return {string}
   */

  toString() {
    this.toArray.map((node) => node.toString(callback)).toString();
  }

  /**
   * Reverse a linked list.
   * @returns {LinkedList}
   */
  reverse() {
    let current = this.head
    let prev = null

    while(current !== null){
      temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;

    }
    return this;
  }
}