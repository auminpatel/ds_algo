/**
 * 
 * @param {Difficulty:
Category: Arrays
Successful Submissions: 664+
Missing Numbers
You're given an unordered list of unique integers nums in the range [1, n], where n represents the length of nums + 2. This means that two numbers in this range are missing from the list.

Write a function that takes in this list and returns a new list with the two missing numbers, sorted numerically.

Sample Input
nums = [1, 4, 3]
Sample Output
[2, 5]  // n is 5, meaning the completed list should be [1, 2, 3, 4, 5]
Hints
Hint 1
How would you solve this problem if there was only one missing number? Can that solution be applied to this problem with two missing numbers?

Hint 2
To efficiently find a single missing number, you can sum up all of the values in the array as well as sum up all of the values in the expected array (i.e. in the range [1, n]). The difference between these values is the missing number.

Hint 3
Using the same logic as for a single missing number, you can find the total of the two missing numbers. How can you then find which numbers these are?

Hint 4
If you take an average of the two missing numbers, one of the missing numbers must be less than that average, and one must be greater than the average.

Hint 5
Since we know there is one missing number on each side of the average, we can treat each side of the list as its own problem to find one missing number in that list.

Optimal Space & Time Complexity
O(n) time | O(1) space - where n is the length of the input array} nums 
 * @returns 
 */



/**
 * The above code is a JavaScript function that takes an array of numbers as an input and returns an array of two missing numbers from a sequence of numbers starting from 1 and ending at the length of the input array plus 3.

For example, if the input array is [1, 2, 4], the function will return an array of two missing numbers [3, 5].

The function first calculates the sum of the sequence of numbers from 1 to the length of the input array plus 3 using a helper function called arrayFromAToB and sum. It then subtracts the sum of the input array from the total sum to find the missing numbers' sum.

The function then calculates the average of the missing values by dividing the missing sum by 2 and rounding down to the nearest integer using Math.floor().

It then iterates through the input array and adds up the values less than or equal to the average missing value and those greater than it in two different variables foundFirstHalf and foundSecondHalf, respectively.

Finally, it calculates the expected sum of the first half of the sequence up to the average missing value and the second half of the sequence from the average missing value to the end of the sequence using arrayFromAToB and sum. It subtracts the found sums from the expected sums to get the missing values and returns them as an array.
 */

//solution 1

function missingNumbers(nums) {
  let j = {}
  let result = []
  for(let i=0;i<nums.length;i++) {
    j[nums[i]] = true
  }
  console.log(j)
  for(let i=0;i<nums.length + 3 ; i++) {
    if(!j[i] && i!==0) {
    result.push(i)
    }
  }  
  console.log(result, j)
 return result;
  
}

// Do not edit the line below.
exports.missingNumbers = missingNumbers;


//solution 2 

// This function takes an array of numbers `nums` and returns an array of two missing numbers.
function missingNumbers(nums) {
  // Calculate the total sum of numbers between 1 and `nums.length + 3` using a helper function `arrayFromAToB` and `sum`.
  let total = sum(arrayFromAToB(1, nums.length + 3));
  
  // Subtract each number in `nums` from `total`.
  for (const num of nums) {
    total -= num;
  }
  
  // Calculate the average of the two missing numbers.
  const averageMissingValue = Math.floor(total / 2);

  // Initialize variables to track the sum of numbers in the first and second half of `nums`.
  let foundFirstHalf = 0;
  let foundSecondHalf = 0;

  // Iterate through `nums` and add each number to either `foundFirstHalf` or `foundSecondHalf`.
  for (const num of nums) {
    if (num <= averageMissingValue) {
      foundFirstHalf += num;
    } else {
      foundSecondHalf += num;
    }
  }
  
  // Calculate the expected sum of numbers in the first and second half of `nums`.
  const expectedFirstHalf = sum(arrayFromAToB(1, averageMissingValue + 1));
  const expectedSecondHalf = sum(arrayFromAToB(averageMissingValue + 1, nums.length + 3));
  
  // Return an array containing the two missing numbers.
  return [expectedFirstHalf - foundFirstHalf, expectedSecondHalf - foundSecondHalf];
}
  
// This helper function returns an array of numbers between `a` and `b`.
const arrayFromAToB = (a, b) => {
  const array = [];
  for (let num = a; num < b; num++) {
    array.push(num);
  }
  return array;
};

// This helper function returns the sum of an array of numbers.
const sum = array => array.reduce((a, b) => a + b);

// This exports the `missingNumbers` function for use in other modules.
exports.missingNumbers = missingNumbers;
