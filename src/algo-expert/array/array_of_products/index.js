/**
 * Difficulty:
Category: Arrays
Successful Submissions: 44,875+
Array Of Products
Write a function that takes in a non-empty array of integers and returns an array of the same length, where each element in the output array is equal to the product of every other number in the input array.

In other words, the value at output[i] is equal to the product of every number in the input array other than input[i].

Note that you're expected to solve this problem without using division.

Sample Input
array = [5, 1, 4, 2]
Sample Output
[8, 40, 10, 20]
// 8 is equal to 1 x 4 x 2
// 40 is equal to 5 x 4 x 2
// 10 is equal to 5 x 1 x 2
// 20 is equal to 5 x 1 x 4
Hints
Hint 1
Think about the most naive approach to solving this problem. How can we do exactly what the problem wants us to do without focusing at all on time and space complexity?

Hint 2
Understand how output[i] is being calculated. How can we calculate the product of every element other than the one at the current index? Can we do this with just one loop through the input array, or do we have to do multiple loops?

Hint 3
For each index in the input array, try calculating the product of every element to the left and the product of every element to the right. You can do this with two loops through the array: one from left to right and one from right to left. How can these products help us?

Optimal Space & Time Complexity
O(n) time | O(n) space - where n is the length of the input array
 */




Solution 

function arrayOfProducts(array) {
  const products = new Array(array.length).fill(1);
  const leftProducts = new Array(array.length).fill(1);
  const rightProducts = new Array(array.length).fill(1);
  
  let leftRunningProduct = 1;
  for (let i = 0; i < array.length; i++) {
  leftProducts[i] = leftRunningProduct;
  leftRunningProduct *= array[i];
  }
  
  let rightRunningProduct = 1;
  for (let i = array.length - 1; i > -1; i--) {
  rightProducts[i] = rightRunningProduct;
  rightRunningProduct *= array[i];
  }
  
  for (let i = 0; i < array.length; i++) {
  products[i] = leftProducts[i] * rightProducts[i];
  }
  
  return products;
  }
  
  exports.arrayOfProducts = arrayOfProducts;
  


  /**
   * 
   * Sure! Here's an example to help illustrate the code:

```javascript
array = [1, 2, 3, 4, 5];
```

1. Create two empty arrays, `left` and `right`, and an empty array called `result`.
```javascript
const left = [];
const right = [];
let result = [];
```
After this step, `left` and `right` are both empty arrays, and `result` is an empty array as well.

2. Iterate through the input array from left to right and fill the `left` array with the running product of all elements to the left of the current index.
```javascript
for (let i = 0; i < array.length; i++) {
  left[i] = i === 0 ? array[i] : left[i - 1] * array[i];
}
```
After this step, `left` will contain the running product of all elements to the left of each index in the `array`:

```
left = [1, 2, 6, 24, 120];
```

3. Iterate through the input array from right to left and fill the `right` array with the running product of all elements to the right of the current index.
```javascript
for (let i = array.length - 1; i >= 0; i--) {
  right[i] = i === array.length - 1 ? array[i] : right[i + 1] * array[i];
}
```
After this step, `right` will contain the running product of all elements to the right of each index in the `array`:

```
right = [120, 120, 60, 20, 5];
```

4. Iterate through the input array and calculate the corresponding product of all elements except the one at the current index using the `left` and `right` arrays. Push the result into the `result` array.
```javascript
for (let i = 0; i < array.length; i++) {
  if (i === 0) {
    result.push(right[i + 1]);
  } else if (i === array.length - 1) {
    result.push(left[i - 1]);
  } else {
    result.push(left[i - 1] * right[i + 1]);
  }
}
```
After this step, `result` will contain the products of all elements except the one at the corresponding index in the `array`:

```
result = [120, 60, 40, 30, 24];
```

Finally, the function will log the `result` array to the console and return it.
   */


  function arrayOfProducts(array) {
    const left = {};
    const right = {};
   let result = []
     for(let i=0;i<array.length;i++) {
       left[i] = i===0 ?  array[i]  : left[i-1] * array[i]
     }
      for(let i=array.length-1;i>=0;i--) {
       right[i] = i===array.length-1 ?  array[i]  : right[i+1] * array[i]
     }
    
     for(let i=0;i<array.length;i++) {
       if(i===0) {
         result.push(right[i+1]);
       }
       else if(i===array.length-1) {
         result.push(left[i-1])
       }
       else {
         result.push(left[i-1] * right[i+1])
       }
     }
     console.log(result)
     return result
   }
   
   // Do not edit the line below.
   exports.arrayOfProducts = arrayOfProducts;
   



/**
 * Solution 3
Sure! Here's an explanation of the code with an example:

Suppose we have the following input array:
```
array = [1, 2, 3, 4, 5];
```

1. Create a new array `result` of the same length as the input array and fill it with 1's.
```javascript
const result = new Array(array.length).fill(1);
```
After this step, `result` will be an array filled with 1's of the same length as the input array:

```
result = [1, 1, 1, 1, 1];
```

2. Iterate through the input array from left to right and update each element in the `result` array with the product of all elements to the left of the current index.
```javascript
let left = 1;
for (let i = 0; i < array.length; i++) {
  result[i] *= left;
  left *= array[i];
}
```
After this step, `result` will contain the products of all elements to the left of each index in the `array`:

```
result = [1, 1, 2, 6, 24];
```

3. Iterate through the input array from right to left and update each element in the `result` array with the product of all elements to the right of the current index.
```javascript
let right = 1;
for (let i = array.length - 1; i >= 0; i--) {
  result[i] *= right;
  right *= array[i];
}
```
After this step, `result` will contain the products of all elements except the one at the corresponding index in the `array`:

```
result = [120, 60, 40, 30, 24];
```

Finally, the function will log the `result` array to the console and return it.
 */
























   function arrayOfProducts(array) {
    const result = new Array(array.length).fill(1);
    let left = 1, right = 1;
  
    for (let i = 0; i < array.length; i++) {
      result[i] *= left;
      left *= array[i];
    }
  
    for (let i = array.length - 1; i >= 0; i--) {
      result[i] *= right;
      right *= array[i];
    }
  
    console.log(result);
    return result;
  }
  