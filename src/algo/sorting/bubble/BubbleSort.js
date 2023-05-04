import Sort from "../Sorting.js";

/** Note if we check the value for i is started from 1 and j is calculated only till arraylength-i
 * Bcoz the logic [array[j], array[j + 1]] = [array[j + 1], array[j]];
 * handle the value for 0 at the start and at the end length will be less then i value bcoz j+1 handle the logic for checking the 
 * last array value , and on each
 * Since i increase , and we add j less then  arraylength-i bcoz on each iteration last column value will be at it corrent postion
 * eg: 
 * 
 * [3, 2, 1]  
 * when i=1 , j=0  (till j < 3-i)
 * [2,3,1]
 * when i=1, j=1 
 * [2,1,3]
 * 
 * when i=2 , j=0  (till j < 1) // bcoz last element column is not correctly placed 
 * [1,2,3]
 */ 


/**
 * Bubble sort works by repeatedly iterating through the list and comparing adjacent elements. During each iteration, the largest element in the unsorted portion of the list "bubbles up" to the last position, as it is compared with and swapped with each of the elements that come before it.

So, by the end of the first iteration, the largest element in the list will be in its correct sorted position at the end of the list. In subsequent iterations, the algorithm will sort the remaining unsorted portion of the list, which will now exclude the largest element that has already been correctly placed in its final position. This process continues until the entire list is sorted.

Therefore, it's correct to say that bubble sort is based on the idea that the largest element will eventually be placed in the last position of the list.
 */

/**
 * Bubble sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares adjacent elements and swaps them if they are in the wrong order. The algorithm gets its name from the way smaller elements "bubble" to the top of the list, similar to the way air bubbles rise to the top of water.

Here is an example of how bubble sort works:

Suppose we have an unsorted list of integers: [5, 3, 8, 4, 2]

First, we compare the first two elements, 5 and 3. Since 3 is smaller than 5, we swap them to get [3, 5, 8, 4, 2].
Next, we compare the second and third elements, 5 and 8. They are already in the correct order, so we move on.
We continue comparing adjacent elements and swapping them if they are in the wrong order. We compare 8 and 4, swap them to get [3, 5, 4, 8, 2], and then compare 8 and 2 and swap them to get [3, 5, 4, 2, 8].
At this point, the largest element (8) has "bubbled" to the end of the list, but the list is not yet fully sorted.
We repeat the process from the beginning, comparing adjacent elements and swapping them if necessary, until the list is fully sorted. In this case, we swap 5 and 4 to get [3, 4, 5, 2, 8], and then swap 5 and 2 to get [3, 4, 2, 5, 8]. Finally, we swap 4 and 2 to get the fully sorted list: [2, 3, 4, 5, 8].

 */

export default class BubbleSort extends Sort {
  sort(originalArray) {
    // Flag that holds info about whether the swap has occur or not.
    let swapped = false;
    // Clone original array to prevent its modification.
    const array = [...originalArray];

    for (let i = 1; i < array.length; i += 1) {
      swapped = false;

      // Call visiting callback.
      this.callbacks.visitingCallback(array[i]);

      for (let j = 0; j < array.length-i; j += 1) {
        // Call visiting callback.
        this.callbacks.visitingCallback(array[j]);

        // Swap elements if they are in wrong order.
        if (this.comparator.lessThan(array[j + 1], array[j])) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];

          // Register the swap.
          swapped = true;
        }
      }

      // If there were no swaps then array is already sorted and there is
      // no need to proceed.
      if (!swapped) {
        return array;
      }
    }

    return array;
  }
}