import { DoublyLinkedList } from "./DoublyLinkedList.js";

const f = new DoublyLinkedList();

f.append(1);

f.append(2);

f.append(3);

// f.prepend(4)

// //  f.delete(1)

// // f.delete(4)

// // f.delete(3)
// f.reverse()


f.insert(5, 10)

console.log(f.head.next.next)

