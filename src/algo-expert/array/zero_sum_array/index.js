/**
 * Difficulty:
Category: Arrays
Successful Submissions: 4,170+
Zero Sum Subarray
You're given a list of integers nums. Write a function that returns a boolean representing whether there exists a zero-sum subarray of nums.

A zero-sum subarray is any subarray where all of the values add up to zero. A subarray is any contiguous section of the array. For the purposes of this problem, a subarray can be as small as one element and as long as the original array.

Sample Input
nums = [-5, -5, 2, 3, -2]
Sample Output
True // The subarray [-5, 2, 3] has a sum of 0

Hints
Hint 1
A good way to approach this problem is to first think of a simpler version. How would you check if the entire array sum is zero?

Hint 2
If the entire array does not sum to zero, then you need to check if there are any smaller subarrays that sum to zero. For this, it can be helpful to keep track of all of the sums from [0, i], where i is every index in the array.

Hint 3
After recording all sums from [0, i], what would it mean if a sum is repeated?

Optimal Space & Time Complexity
O(n) time | O(n) space - where n is the length of nums
 */



/**
 * Initialize a variable sum to 0.
 * Traverse the array and for each element in the array, add its value to sum.
 * While traversing the array, if at any point the value of sum is equal to zero, then we have found a zero-sum subarray.
 * If the value of sum is seen before during the traversal, that means there is a subarray between the two occurrences of the same value whose sum is equal to zero. This is because the sum between the two occurrences would be zero (e.g., if we have an array [4,-3,2,4,-1,-5,7], then the subarray [2, 4, -1, -5] has a sum of zero).
 * If we reach the end of the array without finding any zero-sum subarray, then there is no such subarray in the array.
 * 
 */


function zeroSumSubarray(nums) {
  console.log(nums)
  let result = {};
  let sum = 0;
   for(let i=0;i<nums.length;i++) {
      sum = sum + nums[i]

     if(result[sum] || sum == 0) {
       return true;
     }
       result[sum] = true;
   }
  console.log(result)
 return false;
}
