import Sort from "../Sorting";





/**
 * Sure, I'll explain the insertion sort algorithm with an example.

Insertion sort is a simple sorting algorithm that works by iterating through an array from left to right, and for each element, it places it in its correct position in the sorted subarray to the left of the current element. The algorithm works by shifting elements in the sorted subarray to the right until it finds the correct position for the current element.

Here's an example of how the insertion sort algorithm works:

Suppose we have the following array of integers that we want to sort in ascending order:

`[5, 2, 4, 6, 1, 3]`

To sort this array using insertion sort, we start by iterating from the second element of the array (index 1) to the last element (index 5). We assume that the first element (index 0) is already sorted.

In the first iteration, we compare the second element (2) with the first element (5) and find that 2 is smaller, so we shift the first element one position to the right and insert 2 in its correct position:

`[2, 5, 4, 6, 1, 3]`

In the second iteration, we compare the third element (4) with the second element (5) and find that 4 is smaller, so we shift the second element one position to the right, and insert 4 in its correct position:

`[2, 4, 5, 6, 1, 3]`

In the third iteration, we compare the fourth element (6) with the third element (5) and find that 6 is greater, so we leave the array as is:

`[2, 4, 5, 6, 1, 3]`

In the fourth iteration, we compare the fifth element (1) with the fourth element (6) and find that 1 is smaller, so we shift the fourth element one position to the right, and then compare the fifth element with the third element (5) and find that 1 is smaller than 5, so we shift the third element one position to the right, and finally insert 1 in its correct position:

`[1, 2, 4, 5, 6, 3]`

In the fifth iteration, we compare the sixth element (3) with the fifth element (6) and find that 3 is smaller, so we shift the fifth element one position to the right, and then compare the sixth element with the fourth element (5) and find that 3 is smaller, so we shift the fourth element one position to the right, and then compare the sixth element with the third element (4) and find that 3 is smaller, so we shift the third element one position to the right, and finally compare the sixth element with the second element (2) and find that 3 is greater, so we insert 3 in its correct position:

`[1, 2, 3, 4, 5, 6]`

After the last iteration, we have a sorted array in ascending order.

This is a basic example of how the insertion sort algorithm works. The algorithm has a time complexity of O(n^2), which means that it is not very efficient for large arrays. However, it is simple to understand and implement, and it can be useful for small arrays or as a building block for more complex sorting algorithms.
 */

export default class InsertionSort extends Sort {

  sort(originalArray) {

    const array = [...originalArray];

    for(let i=1;i<array.length;i++){
      let currentIndex = i;

      this.callbacks.visitingCallback(array[i]);
      while (array[currentIndex - 1] !== undefined && this.comparator.lessThan(array[currentIndex], array[currentIndex-1])) {

        this.callbacks.visitingCallback(array[currentIndex - 1]);

        // Swap the elements.
        [
          array[currentIndex - 1],
          array[currentIndex],
        ] = [
          array[currentIndex],
          array[currentIndex - 1],
        ];

        currentIndex = currentIndex - 1; 
      }
    }
    return array;
  }
<<<<<<< Updated upstream
}
=======
}



export const insertionSort = (array = [1,3,5,1,2,34,1,23,14,17,10,19,10,5]) => {
  
  for(let i=1;i<array.length;i++) {
    for(let j=i; j>=0; j-- ) {
      if(array[j-1] > array[j]) {
        [array[j-1], array[j]] = [array[j], array[j-1]]
      }
    }
  }
  console.log(array)
}

>>>>>>> Stashed changes
