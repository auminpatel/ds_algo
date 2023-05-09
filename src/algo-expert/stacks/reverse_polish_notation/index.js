/**
 * Difficulty:
Category: Stacks
Successful Submissions: 341+
Reverse Polish Notation
You're given a list of string tokens representing a mathematical expression using Reverse Polish Notation. Reverse Polish Notation is a notation where operators come after operands, instead of between them. For example 2 4 + would evaluate to 6.

Parenthesis are always implicit in Reverse Polish Notation, meaning an expression is evaluated from left to right. All of the operators for this problem take two operands, which will always be the two values immediately preceding the operator. For example, 18 4 - 7 / would evaluate to ((18 - 4) / 7) or 2.

Write a function that takes this list of tokens and returns the result. Your function should support four operators: +, -, *, and / for addition, subtraction, multiplication, and division respectively.

Division should always be treated as integer division, rounding towards zero. For example, 3 / 2 evaluates to 1 and -3 / 2 evaluates to -1. You can assume the input will always be valid Reverse Polish Notation, and it will always result in a valid number. Your code should not edit this input list.

Sample Input
tokens = ["50", "3", "17", "+", "2", "-", "/"]
Sample Output
2 // (50 / ((3 + 17) - 2)))
Hints
Hint 1
Operators always operate on the two previous values. Is there a data structure that would assist in finding the two most recent values?

Hint 2
It can be helpful to create a stack that contains all of the previously found or calculated values.

Optimal Space & Time Complexity
O(n) time | O(n) space - where n is the number of tokens
 */


// Solution 1

function operators(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      let r = a / b;
      return Math.trunc(r);
  }
}

function reversePolishNotation(tokens) {
  let stack = [];
  let len = 0;

  if (tokens.length === 1) {
  }
  console.log(isNaN("+"));
  while (len < tokens.length) {
    if (isNaN(tokens[len])) {
      if (stack.length > 1) {
        let k = stack.pop();
        let y = stack.pop();

        let result = operators(y, k, tokens[len]);
        stack.push(result);
      }
    } else {
      stack.push(Number(tokens[len]));
    }

    len++;
  }
  return stack[0];
}

// Do not edit the line below.
exports.reversePolishNotation = reversePolishNotation;






// Solution 2 
// O(n) time | O(n) space - where n is the number of tokens
function reversePolishNotation(tokens) {
  const stack = [];

  for (const token of tokens) {
    if (token === "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (token === "-") {
      const firstNum = stack.pop();
      stack.push(stack.pop() - firstNum);
    } else if (token === "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (token === "/") {
      const firstNum = stack.pop();
      stack.push(Math.trunc(stack.pop() / firstNum));
    } else {
      stack.push(parseInt(token));
    }
  }

  return stack.pop();
}

// Do not edit the line below.
exports.reversePolishNotation = reversePolishNotation;
