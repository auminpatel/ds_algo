/**
 * Difficulty:
Category: Arrays
Successful Submissions: 23,763+
Four Number Sum
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all quadruplets in the array that sum up to the target sum and return a two-dimensional array of all these quadruplets in no particular order.

If no four numbers sum up to the target sum, the function should return an empty array.

Sample Input
array = [7, 6, 4, -1, 1, 2]
targetSum = 16
Sample Output
[[7, 6, 4, -1], [7, 6, 1, 2]] // the quadruplets could be ordered differently
Hints
Hint 1
Using four for loops to calculate the sums of all possible quadruplets in the array would generate an algorithm that runs in O(n^4) time, where n is the length of the input array. Can you come up with something faster using fewer for loops?

Hint 2
You can calculate the sums of every pair of numbers in the array in O(n^2) time using just two for loops. Then, assuming that you've stored all of these sums in a hash table, you can fairly easily find which two sums can be paired to add up to the target sum: the numbers summing up to these two sums constitute candidates for valid quadruplets; you just have to make sure that no number was used to generate both of the two sums.

Hint 3
You can do everything described in Hint #2 with just two sibling for loops nested inside a third for loop. Your goal is to create a hash table mapping the sums of every pair of numbers in the array to an array of arrays, with each subarray representing the indices of each pair summing up to that number. Loop through the input array with a simple for loop. Inside this loop, loop through the input array again, starting at the index of the first loop. At each iteration, calculate the difference between the target sum and the sum of the two numbers represented by the indices of the for loops. If that difference is in the hash table that you're building, then valid quadruplets can be formed by combining the current pair of numbers with each pair stored in the hash table at the difference just calculated. Following this nested for loop, loop through the array again, this time starting at index zero all the way to the index of the first for loop. At each iteration, calculate the sum of the two numbers represented by the indices of the for loops and add it to the hash table if it isn't already there; then add the pair of indices to the array that the sum in the hash table maps to.

Optimal Space & Time Complexity
Average: O(n^2) time | O(n^2) space - where n is the length of the input array Worst: O(n^3) time | O(n^2) space - where n is the length of the input array
 */





// Find all quadruplets in an array that add up to a target sum.
function fourNumberSum(array, targetSum) {
  // 1. Initialize the variables.
  const allPairSums = {}; // A map that stores all of the pairs of numbers in the array and their sums.
  const quadruplets = []; // An array that will store all of the quadruplets that add up to the target sum.

  // 2. Iterate through the array.
  for (let i = 1; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      // 3. Calculate the sum of the current two elements.
      const currentSum = array[i] + array[j];

      // 4. Subtract the current sum from the target sum.
      const difference = targetSum - currentSum;

      // 5. Check if the difference is in the map.
      if (difference in allPairSums) {
        // 6. If the difference is in the map, iterate through the pairs of numbers that add up to the difference and add the current two elements to each pair.
        for (const pair of allPairSums[difference]) {
          quadruplets.push([...pair, array[i], array[j]]);
        }
      }
    }

    // 7. Iterate through the array and add the current element to all of the pairs of numbers that add up to the target sum minus the current element.
    for (let k = 0; k < i; k++) {
      const currentSum = array[i] + array[k];

      if (!(currentSum in allPairSums)) {
        allPairSums[currentSum] = [[array[k], array[i]]];
      } else {
        allPairSums[currentSum].push([array[k], array[i]]);
      }
    }
  }

  // 8. Return the array of quadruplets.
  return quadruplets;
}


// Example
const array = [1, 2, 3, 4, 5, 6, 7];
const targetSum = 12;

const quadruplets = fourNumberSum(array, targetSum);

console.log(quadruplets); // [[1, 2, 5, 6], [1, 3, 4, 7]]
