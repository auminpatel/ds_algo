/**
 * Difficulty:
Category: Stacks
Successful Submissions: 17,837+
Sunset Views
Given an array of buildings and a direction that all of the buildings face, return an array of the indices of the buildings that can see the sunset.

A building can see the sunset if it's strictly taller than all of the buildings that come after it in the direction that it faces.

The input array named buildings contains positive, non-zero integers representing the heights of the buildings. A building at index i thus has a height denoted by buildings[i]. All of the buildings face the same direction, and this direction is either east or west, denoted by the input string named direction, which will always be equal to either "EAST" or "WEST". In relation to the input array, you can interpret these directions as right for east and left for west.

Important note: the indices in the ouput array should be sorted in ascending order.

Sample Input #1
buildings = [3, 5, 4, 4, 3, 1, 3, 2]
direction = "EAST"
Sample Output #1
[1, 3, 6, 7]

// Below is a visual representation of the sample input.
//    _
//   | |_ _
//  _| | | |_   _
// | | | | | | | |_
// | | | | | |_| | |
// |_|_|_|_|_|_|_|_|
Sample Input #2
buildings = [3, 5, 4, 4, 3, 1, 3, 2]
direction = "WEST"
Sample Output #2
[0, 1]

// The buildings are the same as in the first sample
// input, but their direction is reversed.
Hints
Hint 1
Is there a way to solve this problem in one loop?

Hint 2
How does your solution change based on the direction that the buildings are facing? You can use the same approach for each direction by simply changing the direction in which you traverse the array of buildings.

Hint 3
There are multiple ways to solve this problem, but one is to maintain a running maximum of building heights. Loop in the opposite direction that the buildings are facing, and keep track of the maximum building height that you've seen. At each iteration, compare the height of the current building to the running maximum; if the current building is taller, then it can see the sunset; otherwise, it can't. Finally, at each iteration, update the running maximum.

Hint 4
Another way to solve this problem is to use a stack. Loop in the direction that the buildings are facing, and add the index of the current building to the stack at the end of each iteration. Before adding elements to the stack, compare the current building height to buildings at the top of the stack. Pop off the top of the stack until the current building height is shorter than the height of the building at the top of the stack. This will remove all buildings that are blocked from seeing the sunset by the current building. At the end of the algorithm, the stack will only contain elements that can see the sunset.

Optimal Space & Time Complexity
O(n) time | O(n) space - where n is the length of the input array
 */




// solution 


function sunsetViews(buildings, direction) {
  const result = [];
  let maxHeight = -Infinity;

  // Determine the starting and ending index based on direction
  const startIndex = direction === "WEST" ? 0 : buildings.length - 1;
  const endIndex = direction === "WEST" ? buildings.length : -1;
  const step = direction === "WEST" ? 1 : -1;

  // Loop through the buildings in the opposite direction of the given direction
  for (let i = startIndex; i !== endIndex; i += step) {
    const height = buildings[i];
    if (height > maxHeight) {
      // This building can see the sunset
      result.push(i);
      maxHeight = height;
    }
  }

  // Return the result array in ascending order
  return direction === "WEST" ? result.reverse() : result;
}




function sunsetViews(buildings, direction) {
  const sunsetViews = [];
  const isEast = direction === 'EAST';
  let start = 0;
  let end = buildings.length - 1;
  let tallest = -Infinity;
  
  while(start <= end){
  const idx = isEast ? end : start;
  if(buildings[idx] > tallest) {
  isEast ? sunsetViews.unshift(idx) : sunsetViews.push(idx);;
  tallest = buildings[idx];
  }
  
  isEast ? end-- : start++;
  }
  return sunsetViews;
  }
  
  // Do not edit the line below.
  exports.sunsetViews = sunsetViews;



  function sunsetViews(buildings, direction) {
    let highest = -Infinity
    let result = []
    if(direction === "WEST")
    for(let i=0;i<buildings.length;i++) {
      if(i===0) {
        
        if( 0 < buildings[i] && highest<buildings[i] ) {
          highest = buildings[i];
          result.push(i)
        }
      }
      else {
        if( buildings[i-1] < buildings[i] && highest<buildings[i] ) {
          highest = buildings[i];
          result.push(i)
        }
      }
    }
  
     highest = -Infinity
  
    if(direction === "EAST")
    for(let i=buildings.length-1;  i >=0; i--) {
          console.log(i)
      if(i === buildings.length - 1) {
        console.log(i)
        if( buildings[i]  > 0 && highest<buildings[i]) {
          highest = buildings[i];
          result.push(i)
        }
      }
      else {
        if( buildings[i]  > buildings[i+1] && highest<buildings[i])  {
          highest = buildings[i];
          result.push(i)
        }
      }
    }
  
    return direction === "EAST" ? result.reverse() : result
  }
  
  // Do not edit the line below.
  exports.sunsetViews = sunsetViews;
  





  /**
   * This code implements a solution to the Sunset Views problem, where given an array of buildings and a direction they face, it returns an array of indices of the buildings that can see the sunset. The solution uses a while loop to iterate through the buildings array from either the start or end based on the direction given, and maintains a variable named tallest to keep track of the tallest building seen so far.

Let's step through the code with an example. Suppose we have the following input:

```
buildings = [3, 5, 4, 4, 3, 1, 3, 2]
direction = "EAST"
```

The function first initializes an empty array named `sunsetViews`, and two variables named `start` and `end`. Since the direction is "EAST", we set `isEast` to true. The `start` variable is initialized to 0, and `end` is set to `buildings.length - 1`, which is 7 in this case. We also initialize `tallest` to -Infinity, since there may be no buildings taller than this value.

Next, we enter a while loop that will iterate through the `buildings` array. The loop continues as long as `start` is less than or equal to `end`. On each iteration, we calculate the index of the current building to examine using the `isEast` flag. If `isEast` is true, we set the index to `end`, otherwise we set it to `start`. So, on the first iteration, the current index is 7.

We then check if the height of the current building at this index is greater than the `tallest` building seen so far. If it is, then we add the index of the current building to `sunsetViews`, either at the beginning or end of the array depending on the value of `isEast`. We also update the `tallest` variable to the height of the current building.

After examining the current building, we move the `start` or `end` variable depending on the value of `isEast`. If `isEast` is true, we decrement `end` by 1, otherwise we increment `start` by 1.

We repeat this process until we have examined all buildings that can potentially see the sunset. Finally, we return the `sunsetViews` array containing the indices of the buildings that can see the sunset.

In the example input above, the function would return `[1, 3, 6, 7]` since those are the indices of the buildings that can see the sunset when facing east.
   */



