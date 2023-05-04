/**
 * Difficulty:
Category: Sorting
Successful Submissions: 17,810+
Quick Sort
Write a function that takes in an array of integers and returns a sorted version of that array. Use the Quick Sort algorithm to sort the array.

If you're unfamiliar with Quick Sort, we recommend watching the Conceptual Overview section of this question's video explanation before starting to code.

Sample Input
array = [8, 5, 2, 9, 5, 6, 3]
Sample Output
[2, 3, 5, 5, 6, 8, 9]
Hints
Hint 1
Quick Sort works by picking a "pivot" number from an array, positioning every other number in the array in sorted order with respect to the pivot (all smaller numbers to the pivot's left; all bigger numbers to the pivot's right), and then repeating the same two steps on both sides of the pivot until the entire array is sorted.

Hint 2
Pick a random number from the input array (the first number, for instance) and let that number be the pivot. Iterate through the rest of the array using two pointers, one starting at the left extremity of the array and progressively moving to the right, and the other one starting at the right extremity of the array and progressively moving to the left. As you iterate through the array, compare the left and right pointer numbers to the pivot. If the left number is greater than the pivot and the right number is less than the pivot, swap them; this will effectively sort these numbers with respect to the pivot at the end of the iteration. If the left number is ever less than or equal to the pivot, increment the left pointer; similarly, if the right number is ever greater than or equal to the pivot, decrement the right pointer. Do this until the pointers pass each other, at which point swapping the pivot with the right number should position the pivot in its final, sorted position, where every number to its left is smaller and every number to its right is greater.

Hint 3
Repeat the process mentioned in Hint #2 on the respective subarrays located to the left and right of your pivot, and keep on repeating the process thereafter until the input array is fully sorted.

Optimal Space & Time Complexity
Best: O(nlog(n)) time | O(log(n)) space - where n is the length of the input array Average: O(nlog(n)) time | O(log(n)) space - where n is the length of the input array Worst: O(n^2) time | O(log(n)) space - where n is the length of the input array
 */


/**
 * 
The code above is an implementation of the quicksort algorithm. Here's how it works:

1. The `quickSort` function takes an array as input and returns a sorted array as output. It calls the `quickSortHelper` function to do the actual sorting.

2. The `quickSortHelper` function takes three arguments: the array to sort, the starting index of the subarray to sort, and the ending index of the subarray to sort.

3. If the starting index is greater than or equal to the ending index, the function returns without doing anything. This is the base case of the recursive function.

4. The pivot index is set to the starting index.

5. Two index variables, `leftIdx` and `rightIdx`, are set to the starting index plus one and the ending index, respectively.

6. The function enters a while loop that continues as long as `rightIdx` is greater than or equal to `leftIdx`.

7. Within the while loop, the function checks if the value at the `leftIdx` index is greater than the value at the pivot index AND the value at the `rightIdx` index is less than the value at the pivot index. If this condition is true, it swaps the values at `leftIdx` and `rightIdx`.

8. The function then checks if the value at the `leftIdx` index is less than or equal to the value at the pivot index. If it is, it increments the `leftIdx` variable.

9. Similarly, the function checks if the value at the `rightIdx` index is greater than or equal to the value at the pivot index. If it is, it decrements the `rightIdx` variable.

10. When the while loop ends, the function swaps the value at the pivot index with the value at the `rightIdx` index.

11. The function then checks if the left subarray is smaller than the right subarray. If it is, it recursively calls itself on the left subarray first, then the right subarray. Otherwise, it recursively calls itself on the right subarray first, then the left subarray.

12. Finally, the `swap` function is a helper function used to swap the values of two elements in the array.
 */

// Best: O(nlog(n)) time | O(log(n)) space
// Average: O(nlog(n)) time | O(log(n)) space
// Worst: O(n^2) time | O(log(n)) space
function quickSort(array) {
  quickSortHelper(array, 0, array.length - 1);
  return array;
}

function quickSortHelper(array, startIdx, endIdx) {
  if (startIdx >= endIdx) return;
  const pivotIdx = startIdx;
  let leftIdx = startIdx + 1;
  let rightIdx = endIdx;
  while (rightIdx >= leftIdx) {
    if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
      swap(leftIdx, rightIdx, array);
    }
    if (array[leftIdx] <= array[pivotIdx]) leftIdx++;
    if (array[rightIdx] >= array[pivotIdx]) rightIdx--;
  }
  swap(pivotIdx, rightIdx, array);
  const leftSubarrayIsSmaller =
    rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
  if (leftSubarrayIsSmaller) {
    quickSortHelper(array, startIdx, rightIdx - 1);
    quickSortHelper(array, rightIdx + 1, endIdx);
  } else {
    quickSortHelper(array, rightIdx + 1, endIdx);
    quickSortHelper(array, startIdx, rightIdx - 1);
  }
}

function swap(i, j, array) {
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

exports.quickSort = quickSort;
