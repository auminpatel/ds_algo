/**
 * Difficulty:
Category: Stacks
Successful Submissions: 333+
Best Digits
Write a function that takes a positive integer represented as a string number and an integer numDigits. Remove numDigits from the string so that the number represented by the string is as large as possible afterwards.

Note that the order of the remaining digits cannot be changed. You can assume numDigits will always be less than the length of number and greater than or equal to 0.

Sample Input
number = "462839"
numDigits = 2
Sample Output
"6839" // remove digits 4 and 2
Hints
Hint 1
If we want the number to be as large as possible then which digits would we want to remove? Consider the importance of place values. For example if we're given number = "191" and numDigits = 1 then which 1 would we remove?

Hint 2
It's most important that the largest place values have the highest value digits. If you traverse the string from left to right then you will be traversing the place values in order of importance. If you still have digits to remove then you need to remove smaller digits in higher place values. The question then becomes how can you know what comes later on in the string? If you want to solve this problem in linear time what data structure might help you in this situation?

Hint 3
Use a stack to push digits onto while traversing the string from left to right. That way top of the stack will always have the digit in the last highest place value. Compare the top of the stack to the current digit and if the current digit is greater than the top of the stack, then pop from the stack. Utilizing a stack allows you to replace small digits with largest digits that come later in the string because you can pop off of the stack in order of importance. You will need to build a string to return from the final stack.

Optimal Space & Time Complexity
O(n) time | O(n) space - where n is the length of the input string
 */



/**
 * Sure, I'd be happy to explain the code you've provided!

The function `bestDigits` takes two arguments: `number` (a string of digits) and `numDigits` (a number representing the number of digits we want to keep in the output). The function returns a new string that contains the "best" digits from `number`, which are defined as the digits that appear in descending order.

Here's a step-by-step breakdown of how the function works:

1. Create an empty stack to keep track of the digits.
```
const stack = [];
```

2. Iterate through each digit in `number` using a for...of loop.
```
for (const digit of number) {
  // code to be executed
}
```

3. While iterating through the digits in `number`, compare the current digit to the digits already in the stack. If the current digit is greater than the top digit in the stack, remove the top digit from the stack until either there are no more digits in the stack or the current digit is not greater than the top digit.
```
while (numDigits > 0 && stack.length > 0 && digit > stack[stack.length - 1]) {
  numDigits--;
  stack.pop();
}
```
This step ensures that only the best digits (digits in descending order) are kept in the stack.

4. Add the current digit to the top of the stack.
```
stack.push(digit);
```

5. After all digits have been added to the stack, remove any extra digits from the top of the stack until the desired number of digits (`numDigits`) is reached.
```
while (numDigits > 0) {
  numDigits--;
  stack.pop();
}
```

6. Join the digits in the stack together into a new string and return it.
```
return stack.join("");
```
 */




function bestDigits(number, numDigits) {
  const stack = []; // create an empty stack to hold the digits
  
  // loop through each digit in the number
  for (const digit of number) {
    // while the number of digits to keep is greater than 0, the stack is not empty, and the current digit is greater than the top digit in the stack
    while (numDigits > 0 && stack.length > 0 && digit > stack[stack.length - 1]) {
      numDigits--; // decrement the number of digits to keep
      stack.pop(); // remove the top digit from the stack
    }
    
    stack.push(digit); // add the current digit to the stack
  }
  
  // if there are still digits to remove
  while (numDigits > 0) {
    numDigits--; // decrement the number of digits to keep
    stack.pop(); // remove the top digit from the stack
  }
  
  return stack.join(""); // join the remaining digits in the stack into a string and return it
}

// Do not edit the line below.
exports.bestDigits = bestDigits;
