import Sort from "../Sorting.js";



/**
 * Slice Array 
 * The slice() method returns a shallow copy of a portion of an array into a new array object 
 * selected from start to end (end not included) where start and end represent the index of items in that array
 */

/**
 * merge sort is something which is sorted by dividing a array till a single element and then 
 * its ajacent element is compared with and then sorted the new array , in recursive order 
 * eg: [25,6,3,27,8,29,19]
 * 
 * divide in two arrays  (Array.slice method is used )
 * [25, 6, 3, 27] [8,29,19] step 1 
 * 
 * divide each arrays into respectice arrays this is happening recusive 
 * [25,6] [3,27] [8,29] [19]
 * 
 * divdie each in two array till each array has a single element
 * [25] [6] [3] [37] [8] [29] [19]
 * 
 * compare adjacent and then sort the adjacent arrays, by creting a new array and looping through both the left and right array
 * and adding the min element to the new array , now remaining elemnts that are left in array will be in larger array will be the bigger elements in that  array that are already sorted
 * 
 * [6,25] [3,27] [8,29] [19]
 * 
 * now arrays are been merged at each step
 * [3,6,25,27] [8,19,29]
 * 
 * [3,6,8,19,25,27,29]
 * 
 */


 export default class MergeSort extends Sort {
  sort(originalArray) {
    // Call visiting callback.
    this.callbacks.visitingCallback(null);

    // If array is empty or consists of one element then return this array since it is sorted.
    if (originalArray.length <= 1) {
      return originalArray;
    }

    // Split array on two halves.
    const middleIndex = Math.floor(originalArray.length / 2);
    const leftArray = originalArray.slice(0, middleIndex);
    const rightArray = originalArray.slice(middleIndex, originalArray.length);

    // Sort two halves of split array
    const leftSortedArray = this.sort(leftArray);
    const rightSortedArray = this.sort(rightArray);

    // Merge two sorted arrays into one.
    return this.mergeSortedArrays(leftSortedArray, rightSortedArray);
  }

  mergeSortedArrays(leftArray, rightArray) {
    const sortedArray = [];

    // Use array pointers to exclude old elements after they have been added to the sorted array.
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
      let minElement = null;

      // Find the minimum element between the left and right array.
      if (this.comparator.lessThanOrEqual(leftArray[leftIndex], rightArray[rightIndex])) {
        minElement = leftArray[leftIndex];
        // Increment index pointer to the right
        leftIndex += 1;
      } else {
        minElement = rightArray[rightIndex];
        // Increment index pointer to the right
        rightIndex += 1;
      }

      // Add the minimum element to the sorted array.
      sortedArray.push(minElement);

      // Call visiting callback.
      this.callbacks.visitingCallback(minElement);
    }
    console.log()

    // There will be elements remaining from either the left OR the right
    // Concatenate the remaining elements into the sorted array
    return sortedArray
      .concat(leftArray.slice(leftIndex))
      .concat(rightArray.slice(rightIndex));
  }
}
