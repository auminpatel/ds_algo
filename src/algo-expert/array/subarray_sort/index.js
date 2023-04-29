/**
 * Difficulty:
Category: Arrays
Successful Submissions: 21,805+
Subarray Sort
Write a function that takes in an array of at least two integers and that returns an array of the starting and ending indices of the smallest subarray in the input array that needs to be sorted in place in order for the entire input array to be sorted (in ascending order).

If the input array is already sorted, the function should return [-1, -1].

Sample Input
array = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]
Sample Output
[3, 9]
Hints
Hint 1
Realize that even a single out-of-order number in the input array can call for a large subarray to have to be sorted. This is because, depending on how out-of-place the number is, it might need to be moved very far away from its original position in order to be in its sorted position.

Hint 2
Find the smallest and largest numbers that are out of order in the input array. You should be able to do this in a single pass through the array.

Hint 3
Once you've found the smallest and largest out-of-order numbers mentioned in Hint #2, find their final sorted positions in the array. This should give you the extremities of the smallest subarray that needs to be sorted.

Optimal Space & Time Complexity
O(n) time | O(1) space - where n is the length of the input array
 */



/**
 * This code defines a function called `subarraySort` that takes an array of numbers as input and returns the starting and ending indices of the subarray that needs to be sorted to make the entire array sorted in ascending order.

Here is a step-by-step explanation of the code with an example:

```javascript
// example array
const array = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19];
```

1. Initialize variables `minOutOfOrder` and `maxOutOfOrder` to Infinity and -Infinity respectively.
```javascript
let minOutOfOrder = Infinity;
let maxOutOfOrder = -Infinity;
```

2. Loop through each element in the array and check if it is out of order by calling the function `isOutOfOrder`. If an element is out of order, update `minOutOfOrder` and `maxOutOfOrder`.
```javascript
for (let i = 0; i < array.length; i++) {
  const num = array[i];
  if (isOutOfOrder(i, num, array)) {
    minOutOfOrder = Math.min(minOutOfOrder, num);
    maxOutOfOrder = Math.max(maxOutOfOrder, num);
  }
}
```
In our example, the elements 7, 12, 6, and 7 are out of order, so `minOutOfOrder` is updated to 6 and `maxOutOfOrder` is updated to 12.

3. If `minOutOfOrder` is still Infinity, then the array is already sorted, so return [-1, -1].
```javascript
if (minOutOfOrder === Infinity) {
  return [-1, -1];
}
```
In our example, `minOutOfOrder` is not Infinity, so we continue.

4. Find the left index of the subarray that needs to be sorted by iterating through the array from left to right and finding the first index where the element is greater than `minOutOfOrder`.
```javascript
let subarrayLeftIdx = 0;
while (minOutOfOrder >= array[subarrayLeftIdx]) {
  subarrayLeftIdx++;
}
```
In our example, the subarray starts at index 3 (the first 7 in the array).

5. Find the right index of the subarray that needs to be sorted by iterating through the array from right to left and finding the first index where the element is less than `maxOutOfOrder`.
```javascript
let subarrayRightIdx = array.length - 1;
while (maxOutOfOrder <= array[subarrayRightIdx]) {
  subarrayRightIdx--;
}
```
In our example, the subarray ends at index 9 (the second 7 in the array).

6. Return the starting and ending indices of the subarray as an array.
```javascript
return [subarrayLeftIdx, subarrayRightIdx];
```
In our example, the function returns [3, 9].
 */





function subarraySort(array) {
  let minOutOfOrder = Infinity;
  let maxOutOfOrder = -Infinity;
  for (let i = 0; i < array.length; i++) {
  const num = array[i];
  if (isOutOfOrder(i, num, array)) {
  minOutOfOrder = Math.min(minOutOfOrder, num);
  maxOutOfOrder = Math.max(maxOutOfOrder, num);
  }
  }
  if (minOutOfOrder === Infinity) {
  return [-1, -1];
  }
  let subarrayLeftIdx = 0;
  while (minOutOfOrder >= array[subarrayLeftIdx]) {
  subarrayLeftIdx++;
  }
  let subarrayRightIdx = array.length - 1;
  while (maxOutOfOrder <= array[subarrayRightIdx]) {
  subarrayRightIdx--;
  }
  return [subarrayLeftIdx, subarrayRightIdx];
  }
  
  function isOutOfOrder(i, num, array) {
  if (i === 0) return num > array[i + 1];
  if (i === array.length - 1) return num < array[i - 1];
  return num > array[i + 1] || num < array[i - 1];
  }
  
  exports.subarraySort = subarraySort;
  