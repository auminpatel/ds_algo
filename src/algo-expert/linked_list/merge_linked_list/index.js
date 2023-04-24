/**
 * Difficulty:
Category: Linked Lists
Successful Submissions: 17,304+
Merge Linked Lists
Write a function that takes in the heads of two Singly Linked Lists that are in sorted order, respectively. The function should merge the lists in place (i.e., it shouldn't create a brand new list) and return the head of the merged list; the merged list should be in sorted order.

Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None / null if it's the tail of the list.

You can assume that the input linked lists will always have at least one node; in other words, the heads will never be None / null.

Sample Input
headOne = 2 -> 6 -> 7 -> 8 // the head node with value 2
headTwo = 1 -> 3 -> 4 -> 5 -> 9 -> 10 // the head node with value 1
Sample Output
1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 // the new head node with value 1
Hints
Hint 1
You can iterate through the Linked Lists from head to tail and merge them along the way by inserting nodes from the second Linked List into the first Linked List.

Hint 2
You'll need to manipulate three nodes at once at every step.

Hint 3
At every step, you'll need to have three variables (p1, p2, and p1Prev) pointing to the current node in the first Linked List (p1), the current node in the second Linked List (p2), and the previous node in the first Linked List (p1Prev). If the value of p1 is smaller than the value of p2, then you can just "move forward" in the first Linked List by moving p1 and p1Prev forward by one position (p1Prev becomes p1 and p1 becomes p1.next). If the value of p1 is greater than the value of p2, then you need to insert p2 before p1. You'll have to first make p1Prev point to p2, then make p2 point to p1, all the while not losing track of p2's "next" node, which you'll need to move to right after. You'll also have to handle edge cases when you're dealing with head nodes or tail nodes.

Hint 4
You can implement this algorithm both iteratively and recursively following nearly identical logic.

Optimal Space & Time Complexity
O(n + m) time | O(1) space - where n is the number of nodes in the first Linked List and m is the number of nodes in the second Linked List
 */




/**
 * Sure, I can provide a detailed explanation of the approach to merging two linked lists using three pointers. Here are the steps involved:

1. Create three pointers, where the first two pointers will point to the start nodes of the two linked lists that we want to merge, and the third pointer will point to null initially. Let's call these pointers `ptr1`, `ptr2`, and `new_ptr`, respectively.

2. Compare the first nodes of both linked lists that `ptr1` and `ptr2` are pointing to. Let's say `ptr1` is pointing to the smaller node between the two nodes.

3. Append the node pointed by `ptr1` to `new_ptr`, which is our new linked list pointer.

4. Update `new_ptr` to point to the node we just appended.

5. Move `ptr1` to point to the next node in the first linked list.

6. Compare the first nodes of both linked lists again, but this time, compare the node pointed by `ptr2` with the node pointed by `ptr1`.

7. If the node pointed by `ptr2` is smaller, append it to `new_ptr` and update `new_ptr` to point to the node we just appended. Move `ptr2` to point to the next node in the second linked list.

8. If the node pointed by `ptr1` is smaller, append it to `new_ptr` and update `new_ptr` to point to the node we just appended. Move `ptr1` to point to the next node in the first linked list.

9. Continue comparing the nodes pointed by `ptr1` and `ptr2` until we reach the end of one of the linked lists.

10. When we reach the end of one of the linked lists, append all the remaining nodes of the other linked list to `new_ptr`.

11. At this point, `new_ptr` will be pointing to the last node of the new merged linked list.

12. Return the head of the merged linked list, which is the first node pointed by `new_ptr`'s previous node.

It's worth noting that this approach works only if both input linked lists are already sorted. If the input linked lists are not sorted, we first need to sort them before applying the above approach.
 */



// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergeLinkedLists(headOne, headTwo) {

  let [primary, secondary] =  [headOne, headTwo];
  let prev = new LinkedList(null);
  
  while(primary!==null && secondary!==null) {
    if(primary.value < secondary.value) {
      prev.next = primary;
      primary = primary.next
    }
    else {
      prev.next = secondary;
      secondary = secondary.next;
    }
    prev = prev.next;
  }

  prev.next = primary === null ? secondary :  primary;

  console.log(primary)
  return headOne.value < headTwo.value ? headOne : headTwo;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.mergeLinkedLists = mergeLinkedLists;
