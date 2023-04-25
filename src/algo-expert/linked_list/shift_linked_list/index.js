
/**
 * 
 * Difficulty:
Category: Linked Lists
Successful Submissions: 15,991+
Shift Linked List
Write a function that takes in the head of a Singly Linked List and an integer k, shifts the list in place (i.e., doesn't create a brand new list) by k positions, and returns its new head.

Shifting a Linked List means moving its nodes forward or backward and wrapping them around the list where appropriate. For example, shifting a Linked List forward by one position would make its tail become the new head of the linked list.

Whether nodes are moved forward or backward is determined by whether k is positive or negative.

Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None / null if it's the tail of the list.

You can assume that the input Linked List will always have at least one node; in other words, the head will never be None / null.

Sample Input
head = 0 -> 1 -> 2 -> 3 -> 4 -> 5 // the head node with value 0
k = 2
Sample Output
4 -> 5 -> 0 -> 1 -> 2 -> 3 // the new head node with value 4
Hints
Hint 1
Putting aside the cases where k is a negative integer, where k is 0, or where k is larger than the length of the linked list, what does shifting the linked list by k positions entail exactly?

Hint 2
Putting aside the cases mentioned in Hint #1, shifting the linked list by k positions means moving the last k nodes in the linked list to the front of the linked list. What nodes in the linked list will you actually need to mutate?

Hint 3
There are four nodes that really matter in this entire process: the original tail of the linked list, which will point to the original head of the linked list, the original head of the linked list, which will be pointed to by the original tail of the linked list, the new tail of the linked list, and the new head of the linked list. Note that the new head is the node that the new tail points to in the original, unshifted linked list.

Hint 4
You can find the original tail of the linked list by simply traversing the linked list, starting at the original head of the linked list that you're given. You can find the new tail of the linked list by moving k positions from the original tail if k is positive (which means moving to the (lengthOfList - k)th position in the list, and you can easily count the length of the list as you traverse it to find its original tail). You can access the new head of the linked list once you've found its new tail, since it's the new tail's original next node. How will you handle the trickier values of k?

Optimal Space & Time Complexity
O(n) time | O(1) space - where n is the number of nodes in the Linked List
 */



/**
 * 
Sure, here are the steps for shifting a linked list with both positive and negative rotation:

1. Traverse the linked list to count the number of nodes.
2. Calculate the actual number of shifts needed using modulo operator.
3. If the number of shifts is zero or equal to the count, return the original head.
4. Calculate the number of steps to move the head based on the absolute value of the number of shifts.
5. If the number of shifts is negative, wrap around to the end of the list by setting the number of steps to move to `count - stepsToMove`.
6. Traverse the linked list to find the new head by moving `stepsToMove` nodes.
7. Update the pointers to shift the linked list: set the `next` pointer of the node before the new head to `null`, set the `next` pointer of the last node to the original head.
8. Return the new head.

For example, consider a linked list with the values `1 -> 2 -> 3 -> 4 -> 5`. Here are the steps to shift the list by 2 positions:

1. The linked list has 5 nodes.
2. The actual number of shifts needed is 2 % 5 = 2.
3. The number of shifts is not zero or equal to the count.
4. The number of steps to move the head is 2.
5. We are rotating the list to the right, so no wrapping is necessary.
6. We move the head 2 nodes to the right to get the new head `4 -> 5 -> 1 -> 2 -> 3`.
7. We set the `next` pointer of node 3 (the node before the new head) to `null`, and set the `next` pointer of node 5 (the last node) to the original head.
8. We return the new head `4 -> 5 -> 1 -> 2 -> 3`.

To shift the same linked list by -2 positions (rotate to the left), the steps are:

1. The linked list has 5 nodes.
2. The actual number of shifts needed is -2 % 5 = 3.
3. The number of shifts is not zero or equal to the count.
4. The number of steps to move the head is 3.
5. We are rotating the list to the left, so we need to wrap around to the end of the list. We set the number of steps to move to `5 - 3 = 2`.
6. We move the head 2 nodes to the left to get the new head `3 -> 4 -> 5 -> 1 -> 2`.
7. We set the `next` pointer of node 2 (the node before the new head) to `null`, and set the `next` pointer of node 5 (the last node) to the original head.
8. We return the new head `3 -> 4 -> 5 -> 1 -> 2`.
 */


function shiftLinkedList(head, k) {
  // Initialize a variable to count the number of nodes in the linked list
  let nodeCount = 0;
  // Start at the head of the linked list
  let currentNode = head;
  
  // Count the number of nodes in the linked list by traversing it
  while (currentNode !== null) {
    currentNode = currentNode.next;
    nodeCount++;
  }

  // Calculate the number of rotations needed to shift the linked list
  let rotationsNeeded = k % nodeCount;

  // Calculate the new head position by subtracting the rotations from the length of the linked list
  let newHeadPosition = Math.abs(nodeCount - rotationsNeeded);
  
  // If the new head position is at the tail or head of the original linked list, no rotation is needed
  if (newHeadPosition === 0 || newHeadPosition === nodeCount || rotationsNeeded === 0) {
    return head;
  }

  // Find the node that will become the new head of the rotated linked list
  newHeadPosition = newHeadPosition > nodeCount ? newHeadPosition - nodeCount : newHeadPosition;
  let newHeadNode = head;
  while (newHeadPosition - 1 > 0) {
    newHeadNode = newHeadNode.next;
    newHeadPosition--;
  }
  
  // Save the node that follows the new head node
  let nextNode = newHeadNode.next;
  
  // Make the node before the new head node the tail of the rotated linked list
  newHeadNode.next = null;

  // Traverse the linked list starting from the next node after the new head node to find the new tail node
  let tailNode = nextNode;
  while (tailNode.next !== null) {
    tailNode = tailNode.next;
  }

  // Connect the original head node to the new tail node to complete the rotation
  tailNode.next = head;
  
  // Return the new head of the rotated linked list
  return newHeadNode;
}




