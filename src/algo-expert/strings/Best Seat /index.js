/**
 * Difficulty:
Category: Arrays
Successful Submissions: 511+
Best Seat
You walk into a theatre you're about to see a show in. The usher within the theatre walks you to your row and mentions you're allowed to sit anywhere within the given row. Naturally you'd like to sit in the seat that gives you the most space. You also would prefer this space to be evenly distributed on either side of you (e.g. if there are three empty seats in a row, you would prefer to sit in the middle of those three seats).

Given the theatre row represented as an integer array, return the seat index of where you should sit. Ones represent occupied seats and zeroes represent empty seats.

You may assume that someone is always sitting in the first and last seat of the row. Whenever there are two equally good seats, you should sit in the seat with the lower index. If there is no seat to sit in, return -1. The given array will always have a length of at least one and contain only ones and zeroes.

Sample Input
seats = [1, 0, 1, 0, 0, 0, 1]

Sample Output
4
Hints
Hint 1

Try thinking about this problem in real life. How would you determine what seat has the most space?

Hint 2
The best seat will always be within the longest contiguous subarray of all zeros.

Hint 3
Once you find the longest contiguous subarray of empty seats, how can you choose where to sit within that subarray?

Hint 4
How can you find the midpoint between two people?

Optimal Space & Time Complexity
O(n) time | O(1) space - where n is the number of seats
 */


/**
 * 
 * Explanation
 * It is based on the simple rule find the consequetive zero numbers 
 * 
 * maintain two pointer each pointer will be on index = 0 
 * keep left pointer constant and increament right till we dont finc the next 1 
 * if there is any difference greater then 1 then there will be 0's in between the 
 * two pointers , 
 * So add the space has maxspace and the middle number between the zeros has bestSeat 
 * 
 * now make left = right and start the above process till be reach the end of the array and find the best results 
 * 
 */


function bestSeat(seats) {
  let bestSeat = -1;
  let maxSpace = 0;
  
  let left = 0;
  while (left < seats.length) {
  let right = left + 1;
  while (right < seats.length && seats[right] === 0) {
  right += 1;
  }
  
  const availableSpace = right - left - 1;
  if (availableSpace > maxSpace) {
  bestSeat = Math.floor((left + right) / 2);
  maxSpace = availableSpace;
  }
  left = right;
  }
  
  return bestSeat;
  }
  

  