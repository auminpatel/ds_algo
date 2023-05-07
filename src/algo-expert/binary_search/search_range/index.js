/**
 * Difficulty:
Category: Searching
Successful Submissions: 11,143+
Search For Range
Write a function that takes in a sorted array of integers as well as a target integer. The function should use a variation of the Binary Search algorithm to find a range of indices in between which the target number is contained in the array and should return this range in the form of an array.

The first number in the output array should represent the first index at which the target number is located, while the second number should represent the last index at which the target number is located. The function should return [-1, -1] if the integer isn't contained in the array.

If you're unfamiliar with Binary Search, we recommend watching the Conceptual Overview section of the Binary Search question's video explanation before starting to code.

Sample Input
array = [0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73]
target = 45
Sample Output
[4, 9]
Hints
Hint 1
The Binary Search algorithm involves a left pointer and a right pointer and using those pointers to find the middle number in an array in an effort to find a target number. Unlike with normal Binary Search however, here you cannot simply find the middle number of the array, compare it to the target, and stop once you find it because you are looking for a range rather than a single number. Instead, realize that whenever you find the middle number in the array, the following two scenarios are possible: either the middle number is not equal to the target number, in which case you must proceed with normal Binary Search, or the middle number is equal to the target number, in which case you must figure out if this middle number is an extremity of the range or not.

Hint 2
Try applying an altered version of Binary Search twice: once to find the left extremity of the range and once to find the right extremity of the range. How can you accomplish this? What are the time complexity implications of this approach?

Hint 3
Can you implement this algorithm iteratively? Are there any advantages to doing so?

Optimal Space & Time Complexity
O(log(n)) time | O(1) space - where n is the length of the input array
 */




function searchForRange(array, target) {
  const finalRange = [-1, -1];
  alteredBinarySearch(array, target, 0, array.length - 1, finalRange, true);
  alteredBinarySearch(array, target, 0, array.length - 1, finalRange, false);
  return finalRange;
}

function alteredBinarySearch(array, target, left, right, finalRange, goLeft) {
  if (left > right) return;
  const mid = Math.floor((left + right) / 2);
  if (array[mid] < target) {
    alteredBinarySearch(array, target, mid + 1, right, finalRange, goLeft);
  } else if (array[mid] > target) {
    alteredBinarySearch(array, target, left, mid - 1, finalRange, goLeft);
  } else {
    if (goLeft) {
      if (mid === 0 || array[mid - 1] !== target) {
        finalRange[0] = mid;
      } else {
        alteredBinarySearch(array, target, left, mid - 1, finalRange, goLeft);
      }
    } else {
      if (mid === array.length - 1 || array[mid + 1] !== target) {
        finalRange[1] = mid;
      } else {
        alteredBinarySearch(array, target, mid + 1, right, finalRange, goLeft);
      }
    }
  }
}

exports.searchForRange = searchForRange;


/**
 * 
This is a JavaScript implementation of a function called `searchForRange` which takes an array and a target number as its inputs, and returns an array representing the range of indices in the input array where the target number can be found. If the target number is not present in the input array, the function will return [-1, -1].

The function uses two binary search loops to find the left and right endpoints of the range where the target number occurs.

1. Left endpoint binary search:
   - Initialize two pointers, `left` and `right`, to the beginning and end of the array respectively.
   - Initialize a variable `leftIndex` to -1 to represent the left endpoint of the range where the target number occurs.
   - While `left` is less than or equal to `right`:
     - Calculate the midpoint index using `Math.floor((left + right) / 2)`.
     - If the element at the midpoint index is equal to the target:
       - Check if the element at the index immediately to the left of the midpoint is also equal to the target. If it is, update `right` to search to the left of the midpoint.
       - If the element at the index immediately to the left of the midpoint is not equal to the target, update `leftIndex` to the midpoint index and break out of the loop.
     - If the element at the midpoint index is greater than the target, update `right` to search to the left of the midpoint.
     - If the element at the midpoint index is less than the target, update `left` to search to the right of the midpoint.
   - After the loop, `leftIndex` will contain the left endpoint of the range where the target number occurs.

2. Right endpoint binary search:
   - Reset the pointers `left` and `right` to the beginning and end of the array respectively.
   - Initialize a variable `rightIndex` to -1 to represent the right endpoint of the range where the target number occurs.
   - While `left` is less than or equal to `right`:
     - Calculate the midpoint index using `Math.floor((left + right) / 2)`.
     - If the element at the midpoint index is equal to the target:
       - Check if the element at the index immediately to the right of the midpoint is also equal to the target. If it is, update `left` to search to the right of the midpoint.
       - If the element at the index immediately to the right of the midpoint is not equal to the target, update `rightIndex` to the midpoint index and break out of the loop.
     - If the element at the midpoint index is greater than the target, update `right` to search to the left of the midpoint.
     - If the element at the midpoint index is less than the target, update `left` to search to the right of the midpoint.
   - After the loop, `rightIndex` will contain the right endpoint of the range where the target number occurs.

3. Return the array `[leftIndex, rightIndex]` which represents the range of indices where the target number can be found.

Here's an example of how you can use the `searchForRange` function:

```
const array = [1, 3, 3, 5, 7, 8, 9, 9, 9, 15];
const target = 9;
const range = searchForRange(array, target);
console.log(range); // outputs [6, 8]
```

In this example, the target number `9` occurs in the input array at indices 6, 7, and 8. The `searchForRange` function uses two binary
 */


function searchForRange(array, target) {
  let left = 0;
  let right = array.length -1
  let leftIndex = -1 ;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if(array[mid] === target) {
      
      if(array[mid-1] === target ) {
           right = mid - 1;
      }
      else {
       
        leftIndex = mid;
        break;
      }
    } 
    else {
      if(target > array[mid]){
        left =  mid + 1
      } 
      else if(array[mid]  > target ){
        right = mid - 1;
      }
    }
  }

   left = 0;
  right = array.length -1
  let rightIndex = -1 ;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if(array[mid] === target) {
      
      if(array[mid+1] === target) {
        left = mid + 1;
       
       
      }
      else {
          rightIndex = mid;
        break;
      }
    } 
    else {
      if(target > array[mid]){
        left =  mid + 1
      } 
      else if(array[mid] > target){
        right = mid - 1;
      }
    }
  }
  
  

  
return [leftIndex, rightIndex]
  
}

// Do not edit the line below.
exports.searchForRange = searchForRange;

