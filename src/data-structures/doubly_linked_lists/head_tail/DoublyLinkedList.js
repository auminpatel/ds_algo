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

    this.tail = node;
   
    this.size++;
    return this;
    
  }


  prepend(value) {
    const node = new DoublyLinkedListNode(value)
    if(!this.head.next) {
      this.head = node;
      this.tail = node;
      return this;
    }

    node.next = this.head;
    this.head.previous = node

    this.head = node;

    this.size++;
    return this;

  }

    /**
   * @param {*} value
   * @return {DoublyLinkedListNode}
   */
     delete(value) {
      if (!this.head) {
        return null;
      }
  
      let deletedNode = null;
      let currentNode = this.head;
  
      while (currentNode) {
        if (this.compare.equal(currentNode.value, value)) {
          deletedNode = currentNode;
  
          if (deletedNode === this.head) {
            // If HEAD is going to be deleted...
  
            // Set head to second node, which will become new head.
            this.head = deletedNode.next;
  
            // Set new head's previous to null.
            if (this.head) {
              this.head.previous = null;
            }
  
            // If all the nodes in list has same value that is passed as argument
            // then all nodes will get deleted, therefore tail needs to be updated.
            if (deletedNode === this.tail) {
              this.tail = null;
            }
          } else if (deletedNode === this.tail) {
            // If TAIL is going to be deleted...
  
            // Set tail to second last node, which will become new tail.
            this.tail = deletedNode.previous;
            this.tail.next = null;
          } else {
            // If MIDDLE node is going to be deleted...
            const previousNode = deletedNode.previous;
            const nextNode = deletedNode.next;
  
            previousNode.next = nextNode;
            nextNode.previous = previousNode;
          }
        }
  
        currentNode = currentNode.next;
      }
  
      return deletedNode;
    }
  
    /**
     * @param {Object} findParams
     * @param {*} findParams.value
     * @param {function} [findParams.callback]
     * @return {DoublyLinkedListNode}
     */
    find({ value = undefined, callback = undefined }) {
      if (!this.head) {
        return null;
      }
  
      let currentNode = this.head;
  
      while (currentNode) {
        // If callback is specified then try to find node by callback.
        if (callback && callback(currentNode.value)) {
          return currentNode;
        }
  
        // If value is specified then try to compare by value..
        if (value !== undefined && this.compare.equal(currentNode.value, value)) {
          return currentNode;
        }
  
        currentNode = currentNode.next;
      }
  
      return null;
    }


   /**
   * @return {DoublyLinkedListNode}
   */
    deleteTail() {
      if (!this.tail) {
        // No tail to delete.
        return null;
      }
  
      if (this.head === this.tail) {
        // There is only one node in linked list.
        const deletedTail = this.tail;
        this.head = null;
        this.tail = null;
  
        return deletedTail;
      }
  
      // If there are many nodes in linked list...
      const deletedTail = this.tail;
  
      this.tail = this.tail.previous;
      this.tail.next = null;
  
      return deletedTail;
    }


      /**
   * Reverse a linked list.
   * @returns {DoublyLinkedList}
   */
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
    this.tail = this.head;
    this.head = prevNode;

    return this;
  }

   /**
   * @return {DoublyLinkedListNode}
   */
    deleteHead() {
      if (!this.head) {
        return null;
      }
  
      const deletedHead = this.head;
  
      if (this.head.next) {
        this.head = this.head.next;
        this.head.previous = null;
      } else {
        this.head = null;
        this.tail = null;
      }
  
      return deletedHead;
    }
  
    /**
     * @return {DoublyLinkedListNode[]}
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
     * @param {*[]} values - Array of values that need to be converted to linked list.
     * @return {DoublyLinkedList}
     */
    fromArray(values) {
      values.forEach((value) => this.append(value));
  
      return this;
    }
  
    /**
     * @param {function} [callback]
     * @return {string}
     */
    toString(callback) {
      return this.toArray().map((node) => node.toString(callback)).toString();
    }


}