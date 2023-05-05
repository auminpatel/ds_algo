
/**
 * 
Category: Strings
Successful Submissions: 30,307+
Longest Palindromic Substring
Write a function that, given a string, returns its longest palindromic substring.

A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.

You can assume that there will only be one longest palindromic substring.

Sample Input
string = "abaxyzzyxf"
Sample Output
"xyzzyx"
Hints
Hint 1
Try generating all possible substrings of the input string and checking for their palindromicity. What is the runtime of the isPalindrome check? What is the total runtime of this approach?

Hint 2
Recognize that a palindrome is a string that is symmetrical with respect to its center, which can either be a character (in the case of odd-length palindromes) or an empty string (in the case of even-length palindromes). Thus, you can check the palindromicity of a string by simply expanding from its center and making sure that characters on both sides are indeed mirrored.

Hint 3
Traverse the input string, and at each index, apply the logic mentioned in Hint #2. What does this accomplish? Is the runtime of this approach better?

Optimal Space & Time Complexity
O(n^2) time | O(n) space - where n is the length of the input string} string 
 * @returns 
 */

/**
 * 
 * @param {Here's how the code works:

Sure! Here's a step-by-step textual explanation of the code:

1. The `longestPalindromicSubstring` function takes a string as an argument and returns the longest palindromic substring within the string.
2. It initializes a variable `currentLongest` to an array with the starting and ending indices of the first character of the string (i.e., `[0, 1]`). 
3. The function then loops through each character in the string, except for the first character (i.e., starting from index `1`), and calls the `getLongestPalindrome` function with two different sets of indices: 
   - `odd`: The indices for an odd-length palindrome, with the current character as the center (e.g., for `string = "racecar"`, the indices would be `[i-1, i+1]` where `i` is the index of the current character).
   - `even`: The indices for an even-length palindrome, with the current character and the previous character as the centers (e.g., for `string = "aabbaa"`, the indices would be `[i-1, i]` where `i` is the index of the current character).
4. The `getLongestPalindrome` function takes the left and right indices for a potential palindrome and the original string. It loops through the string, checking whether the characters at the left and right indices are equal. If they are equal, it expands the indices to check the next characters. The loop continues until the left and right indices are out of bounds of the string or the characters at the indices are not equal.
5. The `getLongestPalindrome` function returns an array of the starting and ending indices for the longest palindrome that starts from the original left index and ends at the original right index. 
6. The `longestPalindromicSubstring` function then compares the lengths of the `odd` and `even` palindromes to find the longest palindrome with the current character as its center. It sets this palindrome to the `longest` variable.
7. The function then compares the lengths of the current longest palindrome (`currentLongest`) and the newly found palindrome (`longest`) to determine which is longer. It sets the longest palindrome to the `currentLongest` variable if it is indeed longer.
8. After the loop has completed for all characters in the string, the `longestPalindromicSubstring` function returns the substring of the original string using the indices in the `currentLongest` variable.
 * @returns 
 */

function longestPalindromicSubstring(string) {
  let currentLongest = [0,1] ;

  for(let i=1; i <string.length ;i++) {
    let odd = getLongestPalindrome(i-1, i+1, string);
    let even = getLongestPalindrome (i-1, i, string);
    let longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    currentLongest = longest[1] - longest[0] > currentLongest[1] - currentLongest[0] ? longest : currentLongest;
  }
  console.log(currentLongest)
  return string.slice(currentLongest[0], currentLongest[1])
}

function getLongestPalindrome(leftIndex, rightIndex, string) {
  while(leftIndex>=0 && rightIndex<string.length) {
    if(string[leftIndex] !== string[rightIndex]) {
      break;
    } 
    leftIndex--;
    rightIndex++;
  }

  return [leftIndex+1, rightIndex]
  
}

// Do not edit the line below.
exports.longestPalindromicSubstring = longestPalindromicSubstring;
