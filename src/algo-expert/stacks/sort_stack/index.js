/**
 * Difficulty:
Category: Stacks
Successful Submissions: 12,039+
Sort Stack
Write a function that takes in an array of integers representing a stack, recursively sorts the stack in place (i.e., doesn't create a brand new array), and returns it.

The array must be treated as a stack, with the end of the array as the top of the stack. Therefore, you're only allowed to

Pop elements from the top of the stack by removing elements from the end of the array using the built-in .pop() method in your programming language of choice.
Push elements to the top of the stack by appending elements to the end of the array using the built-in .append() method in your programming language of choice.
Peek at the element on top of the stack by accessing the last element in the array.
You're not allowed to perform any other operations on the input array, including accessing elements (except for the last element), moving elements, etc.. You're also not allowed to use any other data structures, and your solution must be recursive.

Sample Input
stack = [-5, 2, -2, 4, 3, 1]
Sample Output
[-5, -2, 1, 2, 3, 4]
Hints
Hint 1
If you had to insert a single item into an already sorted stack, all the while abiding by the constraints of this problem, how would you do that?

Hint 2
Inserting a single item in an already sorted stack is fairly simple: you can pop elements off of the stack until you find an element that's smaller than or equal to the value that you want to add. Then, you can push that value on top of the stack and reinsert all the previously popped items back on top of the stack in the reverse order in which you popped them off. The resulting stack will still be sorted.

Hint 3
You can easily insert multiple items in an already sorted stack by just repeatedly performing what's described in Hint #2. However, you'll need to have an already sorted stack. To get an already sorted stack, you'll need to pop all of the elements off the unsorted stack until it's eventually empty, and then you'll need to push all of the items back on the stack, inserting them in their sorted order one at a time.

Hint 4
If you're thinking about Hint #3 recursively, the steps are the following:

Pop an item from the top of the stack, and hold onto it in memory.
Sort the rest of the stack. To do so, repeat step #1 until the stack is empty, at which point you've reached the base case since an empty stack is always sorted.
Insert the most recently popped off item from step #1 back into the now sorted stack but in its proper sorted position. The first time that you reinsert an item, it'll be inserted in an empty stack.
Optimal Space & Time Complexity
O(n^2) time | O(n) space - where n is the length of the stack
 */



/*
Sure, let's go step by step with an example:

Suppose we have an unsorted stack `[3, 1, 4, 2]`. We will call the `sortStack` function with this stack.

1. The `sortStack` function is called with the stack `[3, 1, 4, 2]`.
2. Since the stack is not empty, the `top` element is popped off the stack and stored in the variable `top`. The stack now becomes `[3, 1, 4]` and `top` becomes `2`.
3. The `sortStack` function is called recursively with the stack `[3, 1, 4]`.
4. Since the stack is not empty, the `top` element is popped off the stack and stored in the variable `top`. The stack now becomes `[3, 1]` and `top` becomes `4`.
5. The `sortStack` function is called recursively with the stack `[3, 1]`.
6. Since the stack is not empty, the `top` element is popped off the stack and stored in the variable `top`. The stack now becomes `[3]` and `top` becomes `1`.
7. The `sortStack` function is called recursively with the stack `[3]`.
8. Since the stack is not empty, the `top` element is popped off the stack and stored in the variable `top`. The stack now becomes `[]` and `top` becomes `3`.
9. The `sortStack` function is called recursively with the empty stack `[]`.
10. Since the stack is empty, the function immediately returns the empty stack `[]`.
11. The `insertIntoStack` function is called with the stack `[]` and the value `3`.
12. Since the stack is empty, the value `3` is pushed onto the stack. The stack now becomes `[3]`.
13. The `insertIntoStack` function returns.
14. The `insertIntoStack` function is called again with the stack `[3]` and the value `1`.
15. Since the top element of the stack (`3`) is greater than the value `1`, the function recursively calls itself with the stack `[3]` and the value `1`.
16. Since the stack now only contains one element, the value `1` is pushed onto the stack. The stack now becomes `[1, 3]`.
17. The `insertIntoStack` function returns.
18. The `insertIntoStack` function is called again with the stack `[1, 3]` and the value `4`.
19. Since the value `4` is greater than the top element of the stack (`3`), the value `4` is pushed onto the stack. The stack now becomes `[1, 3, 4]`.
20. The `insertIntoStack` function returns.
21. The `insertIntoStack` function is called again with the stack `[1, 3, 4]` and the value `2`.
22. Since the top element of the stack (`4`) is greater than the value `2`, the function recursively calls itself with the stack `[1, 3, 4]` and the value `2`.
23. Since the top element of the stack (`3`) is greater than the value `2`, the function recursively calls itself with the stack `[1, 3]` and the value `2`.
24. Since the top element of the stack (`1`) is greater than the value `2`, the function recursively calls itself with the stack `[1]` and the value `2`.
25. Since the stack now only contains one element, the value `2` is pushed onto the stack. The stack now becomes `[1, 2]`.
26. The `insertIntoStack` function returns.
27. The `sortStack` function returns the sorted stack `[1, 2, 3, 4]`.

So, the final sorted stack is `[1, 2, 3, 4]`. The `sortStack` function recursively pops each element off the stack, calls itself with the remaining stack, and then inserts the popped element back into the stack in the correct position using the `insertIntoStack` function. The `insertIntoStack` function recursively pops elements off the stack until it finds the correct position to insert the value. This process continues until the stack is empty, at which point the sorted stack is returned.
*/




function sortStack(stack) {
  if(stack.length===0) {
    return stack
  }

  let top = stack.pop();

  sortStack(stack);


  insertIntoStack(stack, top)

  return stack;
}



function insertIntoStack(stack, value)  {
  if(stack.length === 0  || stack[stack.length-1] <= value) {
    stack.push(value)
    return
  }

  const top = stack.pop();

  insertIntoStack(stack, value) 

  stack.push(top)
}

// Do not edit the line below.
exports.sortStack = sortStack;
