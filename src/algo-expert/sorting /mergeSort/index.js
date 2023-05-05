/**
 * 
Let's use the example array [4, 6, 1, 5, 3, 7, 2] and see how merge sort works step by step:

Step 1: Splitting the Array

The initial array is [4, 6, 1, 5, 3, 7, 2].
We split it into two halves:
Left half: [4, 6, 1]
Right half: [5, 3, 7, 2]
We then recursively split each half in half until we reach single-element arrays.
Step 2: Merging the Single-Element Arrays

We merge the single-element arrays back up to the top using the mergedSorted() function.
Since each single-element array is already sorted, we can simply compare the first element of each array and push the smaller value to the sorted array.
We do this until we have merged all the single-element arrays back up to the top.
After the first merge, we have two sorted arrays: [4] and [6].
We compare the first elements of each array and push the smaller value to the sorted array.
We continue this process until we have merged all the arrays back up to the top.
After the second merge, we have two sorted arrays: [1, 4, 6] and [2, 3, 5, 7].
We compare the first elements of each array and push the smaller value to the sorted array.
We continue this process until we have merged all the arrays back up to the top.
Finally, we have the completely sorted array: [1, 2, 3, 4, 5, 6, 7].
 */


/**
 * Merge sort is a divide-and-conquer sorting algorithm that recursively divides an input array into smaller halves until it can sort them trivially, and then merges the sorted halves back together.

Here's an example of merge sort with the input array `[38, 27, 43, 3, 9, 82, 10]`:

1. Divide the array in half to get `[38, 27, 43, 3]` and `[9, 82, 10]`.
2. Recursively apply merge sort to each half until they are trivially sorted:
   - `[38, 27, 43, 3]` -> `[38, 27]` and `[43, 3]` -> `[38]`, `[27]`, `[43]`, and `[3]`
   - `[9, 82, 10]` -> `[9]`, `[82]`, and `[10]`
3. Merge the sorted halves back together:
   - Merge `[38]` and `[27]` to get `[27, 38]`
   - Merge `[43]` and `[3]` to get `[3, 43]`
   - Merge `[27, 38]` and `[3, 43]` to get `[3, 27, 38, 43]`
   - Merge `[9]`, `[82]`, and `[10]` to get `[9, 10, 82]`
   - Merge `[3, 27, 38, 43]` and `[9, 10, 82]` to get `[3, 9, 10, 27, 38, 43, 82]`

The resulting sorted array is `[3, 9, 10, 27, 38, 43, 82]`.
 */






function mergeSort(array) {
  if(array.length <=1) {
    return array;
  }

  let mid = Math.floor(array.length/2) 
  let leftArray  = array.slice(0,mid);
  let rightArray = array.slice(mid) 

  let leftSortedArray = mergeSort(leftArray);
  let rightSortedArray = mergeSort(rightArray);

  return mergedSorted(leftSortedArray, rightSortedArray);
  
}

function mergedSorted(leftSortedArray, rightSortedArray) {
  const sortedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while(leftIndex < leftSortedArray.length && rightIndex < rightSortedArray.length) {
    if(leftSortedArray[leftIndex] <= rightSortedArray[rightIndex]) {
      sortedArray.push(leftSortedArray[leftIndex]);
      leftIndex++;
    } else {
      sortedArray.push(rightSortedArray[rightIndex]);
      rightIndex++;
    }
  }

  return sortedArray.concat(leftSortedArray.slice(leftIndex)).concat(rightSortedArray.slice(rightIndex));
}

let arr = [4, 6, 1, 5, 3, 7, 2];
console.log(mergeSort(arr));
