/**
 * Difficulty:
Category: Strings
Successful Submissions: 1,733+
One Edit
You're given two strings stringOne and stringTwo. Write a function that determines if these two strings can be made equal using only one edit.

There are 3 possible edits:

Replace: One character in one string is swapped for a different character.
Add: One character is added at any index in one string.
Remove: One character is removed at any index in one string.
Note that both strings will contain at least one character. If the strings are the same, your function should return true.

Sample Input
stringOne = "hello"
stringTwo = "hollo"
Sample Output
True // A single replace at index 1 of either string can make the strings equal
Hints
Hint 1
If the difference in lengths of the strings is greater than 1, then there is no way to make them equal with a single edit.

Hint 2
If the lengths of the strings are the same, then the only possible edit is a replace, because adding or removing a character would make the strings different lengths.

Hint 3
If the strings are different lengths, the only possible moves are adding and removing a character. These are essentially the same operation, because they represent the case where one string has a character that another does not.

Optimal Space & Time Complexity
O(n) time | O(1) space - where n is the length of the shorter string
 */



/**
 * This is a JavaScript function named `oneEdit` that takes two string inputs `stringOne` and `stringTwo` and returns a boolean value indicating whether the two strings are one edit (insertion, deletion, or substitution) away from each other or not.

The function starts by checking if the absolute difference between the lengths of the two strings is greater than 1, and if so, it returns `false` since more than one edit is required to make them equal.

Then the function initializes three variables:
- `madeEdit`: a boolean variable to keep track if an edit has been made or not.
- `indexOne`: an integer variable to keep track of the current index in `stringOne`.
- `indexTwo`: an integer variable to keep track of the current index in `stringTwo`.

The function then enters a `while` loop that runs as long as both `indexOne` and `indexTwo` are within their respective string lengths. Within the loop, the function checks if the character at the current index in `stringOne` is not equal to the character at the current index in `stringTwo`. If so, it means that an edit is required to make the strings equal, and the function checks if an edit has already been made. If an edit has already been made, the function returns `false` since more than one edit is required to make the strings equal. Otherwise, the function sets `madeEdit` to `true` to indicate that an edit has been made.

Next, the function checks whether the lengths of the two strings are different. If `stringOne` is shorter than `stringTwo`, it increments `indexTwo` to check the next character in `stringTwo`. If `stringOne` is longer than `stringTwo`, it increments `indexOne` to check the next character in `stringOne`. If the two strings have the same length, it increments both `indexOne` and `indexTwo` to check the next characters in both strings.

If the characters at the current indices in both strings are equal, the function increments both `indexOne` and `indexTwo` to check the next characters.

If the function successfully exits the loop, it means that the two strings are one edit away from each other, and it returns `true`. Otherwise, it returns `false`.

Example:
```
oneEdit("pale", "ple") // returns true, since one deletion is required to make them equal
oneEdit("pale", "bale") // returns true, since one substitution is required to make them equal
oneEdit("pale", "bake") // returns false, since more than one edit is required to make them equal
oneEdit("pale", "paleo") // returns true, since one insertion is required to make them equal
```
 */


function oneEdit(stringOne, stringTwo) {
  if(Math.abs(stringOne.length - stringTwo.length) > 1 ) return false
  
    let madeEdit = false
    let indexOne = 0;
    let indexTwo = 0;
       while(indexOne< stringOne.length && indexTwo<stringTwo.length) {
         if(stringOne[indexOne]!==stringTwo[indexTwo]) {
          if(madeEdit) return false;
           madeEdit = true;
  
         if(stringOne.length < stringTwo.length) {
           indexTwo++;
         }
         else if(stringOne.length > stringTwo.length) {
           indexOne++;
         }
         else {
           indexOne++
           indexTwo++;
           
         }
         
       }
         else {
            indexOne++
           indexTwo++;
  
         }
  
         
    }
   return true
    // Write your code here.
    
  }
  
  // Do not edit the line below.
  exports.oneEdit = oneEdit;
  