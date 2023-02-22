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



export default class BubbleSort extends Sort {
  sort(originalArray) {
    // Flag that holds info about whether the swap has occur or not.
    let swapped = false;
    // Clone original array to prevent its modification.
    const array = [...originalArray];

    for (let i = 0; i < array.length; i += 1) {
      swapped = false;

      // Call visiting callback.
      this.callbacks.visitingCallback(array[i]);

      for (let j = 0; j < array.length; j += 1) {
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