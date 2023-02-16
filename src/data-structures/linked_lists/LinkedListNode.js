export class LinkedListNode {
  constructor(number,  next = null ) {
    this.value = number;
    this.next= next
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}