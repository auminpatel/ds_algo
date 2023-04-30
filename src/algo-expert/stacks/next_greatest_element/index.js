/**
 * Difficulty:
Category: Stacks
Successful Submissions: 11,636+
Next Greater Element
Write a function that takes in an array of integers and returns a new array containing, at each index, the next element in the input array that's greater than the element at that index in the input array.

In other words, your function should return a new array where outputArray[i] is the next element in the input array that's greater than inputArray[i]. If there's no such next greater element for a particular index, the value at that index in the output array should be -1. For example, given array = [1, 2], your function should return [2, -1].

Additionally, your function should treat the input array as a circular array. A circular array wraps around itself as if it were connected end-to-end. So the next index after the last index in a circular array is the first index. This means that, for our problem, given array = [0, 0, 5, 0, 0, 3, 0, 0], the next greater element after 3 is 5, since the array is circular.

Sample Input
array = [2, 5, -3, -4, 6, 7, 2]
Sample Output
[5, 6, 6, 6, 7, -1, 5]
Hints
Hint 1
Solving this problem in O(n^2) time, where n is the length of the array, is straightforward. Can you solve it with a better time complexity?

Hint 2
How can a stack allow you to solve this problem in O(n) time?

Hint 3
There are a couple of ways to solve this problem in linear time with a stack. One approach is to push onto the stack the indices of elements for which you haven't yet found the next greater element. If you go with this index approach, you need to loop through the array twice (since it's circular) and compare the value of the current element in the array to the one represented by the index on top of the stack. If the element on the top of the stack is smaller than the current element, then the current element is next greater element for the top-of-stack element, and you can pop the index off the top of the stack and use it to store the current element in the correct position in your result array. You then continue to pop elements off the top of the stack until the current element is no longer greater than the top-of-stack element. At this point, you add the index of the current element to the top of the stack, and you continue iterating through the array, repeating the same process.

Hint 4
The approach discussed in Hint #3 assumes that you loop through the array from left to right. You could loop through the array backwards using a very similar approach, storing the actual values of elements on the stack rather than their indices. See the Conceptual Overview section of this question's video explanation for a more in-depth explanation.

Optimal Space & Time Complexity
O(n) time | O(n) space - where n is the length of the array
 */



/**
 * 
 * This code defines a function called `nextGreaterElement` that takes an array as its input. The function creates a new array of the same length as the input array, and fills it with -1. It also initializes an empty stack.
 * Then, the function loops through 2 times the length of the input array. Inside the loop, it calculates a circular index (i.e., wraps around to the beginning of the array if it reaches the end), and enters a while loop if the stack is not empty and the element at the top of the stack is less than the current element at the circular index. In this while loop, it pops the top element off the stack, sets the corresponding index in the result array to the current element at the circular index, and continues popping elements off the stack until the condition is no longer met.
 * After the while loop, the current circular index is pushed onto the stack. Once the loop completes, the result array is returned.
 * In summary, this function returns a new array where each element at index i contains the next greater element to the right of the element at index i in the input array, wrapping around to the beginning if necessary.} array 
 */

 function nextGreaterElement(array) {
  // initialize a new array of the same length as the input array, filled with -1
  const result = new Array(array.length).fill(-1);
  // initialize an empty stack
  const stack = [];

  // loop through 2 times the length of the input array
  for (let idx = 0; idx < 2 * array.length; idx++) {
      // calculate the circular index (i.e., wraps around to the beginning of the array if it reaches the end)
      const circularIdx = idx % array.length;

      // enter a while loop if the stack is not empty and the element at the top of the stack is less than the current element at the circular index
      while (stack.length > 0 && array[stack[stack.length - 1]] < array[circularIdx]) {
          // pop the top element off the stack
          const top = stack.pop();
          // set the corresponding index in the result array to the current element at the circular index
          result[top] = array[circularIdx];
      }

      // push the current circular index onto the stack
      stack.push(circularIdx);
  }

  // return the result array
  return result;
}
