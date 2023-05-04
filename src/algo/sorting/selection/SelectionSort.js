import Sort from '../Sorting';



/**
 * Selection sort is another simple sorting algorithm that works by repeatedly selecting the smallest unsorted element and swapping it with the first unsorted element. The algorithm divides the list into two portions: the sorted portion at the left end of the list, and the unsorted portion at the right end of the list. The sorted portion initially starts as an empty list, and the unsorted portion starts as the entire list.

Here is an example of how selection sort works:

Suppose we have an unsorted list of integers: [5, 3, 8, 4, 2]

We start by setting the sorted portion to an empty list and the unsorted portion to the entire list.
We find the smallest element in the unsorted portion, which is 2, and swap it with the first element in the unsorted portion, which is 5. The list becomes: [2, 3, 8, 4, 5].
We move the boundary of the sorted portion one position to the right, so that it now includes the first element (which is the smallest element). The sorted portion becomes [2], and the unsorted portion becomes [3, 8, 4, 5].
We repeat steps 2 and 3, finding the smallest element in the unsorted portion (which is 3), swapping it with the first element in the unsorted portion (which is 3), and moving the boundary of the sorted portion one position to the right. The list becomes: [2, 3, 8, 4, 5].
We repeat steps 2-4 until the entire list is sorted. The next smallest element is 4, so we swap it with the second element in the unsorted portion, which is 8. The list becomes: [2, 3, 4, 8, 5]. Then we swap 5 with 8 to get the fully sorted list: [2, 3, 4, 5, 8].
 */


/**
 * "Based on the simple rule that we keep finding the smallest element in the unsorted array, the selection sort algorithm divides the array into two parts: a left (sorted) part and a right (unsorted) part. We start with the left part as empty and the right part as full. We find the first smallest element in the right part and add it to the left (sorted) part, then we repeat the process to find the next smallest element in the remaining unsorted part of the array."
 */

export default class SelectionSort extends Sort {
  sort(originalArray) {
    // Clone original array to prevent its modification.
    const array = [...originalArray];

    for (let i = 0; i < array.length - 1; i += 1) {
      let minIndex = i;

      // Call visiting callback.
      this.callbacks.visitingCallback(array[i]);

      // Find minimum element in the rest of array.
      for (let j = i + 1; j < array.length; j += 1) {
        // Call visiting callback.
        this.callbacks.visitingCallback(array[j]);

        if (this.comparator.lessThan(array[j], array[minIndex])) {
          minIndex = j;
        }
      }

      // If new minimum element has been found then swap it with current i-th element.
      if (minIndex !== i) {
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
      }
    }

    return array;
  }
}
