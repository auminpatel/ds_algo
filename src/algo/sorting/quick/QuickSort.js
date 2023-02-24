import Sort from '../Sorting.js';


/**
 * So quick sort is using divide and conquere similar to mergeSort 
 * array os divided based ont he pivot element which can be any element , generally considerd the first element
 * Now all the elements that are smaller the pivot are added to leftArray and elements similar to pivot to centerarray and greater then pivot
 * to right array
 * Once each left and right array is created they are again called by the osrting array to further divide the array based on pivot to repeat above steps 
 * till a single element is remain in seach element and each smaller element is sprted and joined together to make a big sorted array 
 * 
 * eg: 
 * [25,7,24,31,51,34,6,8]
 * pivot:25
 * [7,24,6,8,25,31,51,34]
 * 
 * next step divide further the array
 * [7,24,6,8] [25] [31,51,34]
 * 
 * two pivots for left and right array 
 * pivot:7 array1 , pivot:31 array2 
 * [6] [7] [24,8]       [31] [51,34]
 * 
 * 
 * 3 new array since middle elements are removed 
 * [6] [24 ,8] [51,34]
 * 
 * return since single value [6] array 1 , 
 * pivot:24 array2 ,pivot:51
 * 
 * [8] [24] [34] [51] 
 * 
 * now above elements are single these will be retured and now gets combined as follows
 * step:1 join single elements where only either left or right is present
 * [8,24] [34,51]
 * step: 2 adding the pivots the above step after sort 
 * [6,7,8,24] [31,34,51]
 * 
 * step3: adding final pivot 
 * [6,7,8,24,25,31,34,51]
*/
export default class QuickSort extends Sort {
  /**
   * @param {*[]} originalArray
   * @return {*[]}
   */
  sort(originalArray) {
    // Clone original array to prevent it from modification.
    const array = [...originalArray];

    // If array has less than or equal to one elements then it is already sorted.
    if (array.length <= 1) {
      return array;
    }

    // Init left and right arrays.
    const leftArray = [];
    const rightArray = [];

    // Take the first element of array as a pivot.
    const pivotElement = array.shift();
    const centerArray = [pivotElement];

    // Split all array elements between left, center and right arrays.
    while (array.length) {
      const currentElement = array.shift();

      // Call visiting callback.
      this.callbacks.visitingCallback(currentElement);

      if (this.comparator.equal(currentElement, pivotElement)) {
        centerArray.push(currentElement);
      } else if (this.comparator.lessThan(currentElement, pivotElement)) {
        leftArray.push(currentElement);
      } else {
        rightArray.push(currentElement);
      }
    }

    // Sort left and right arrays.
    const leftArraySorted = this.sort(leftArray);
    const rightArraySorted = this.sort(rightArray);

    // Let's now join sorted left array with center array and with sorted right array.
    return leftArraySorted.concat(centerArray, rightArraySorted);
  }
}
