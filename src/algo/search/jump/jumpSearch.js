import Comparator from "../../../data-structures/comparator";

export default function jumpsort(sortedArray, item, comparatorFunction) {


  const comparator = new Comparator(comparatorFunction);
 
  let arraySize = sortedArray.length;

  const jumpSize = Math.floor(Math.sqrt(arraySize));

 


  if (!arraySize) {
    // We can't find anything in empty array.
    return -1;
  }
 // Find the block where the seekElement belong to.
 let blockStart = 0;
 let blockEnd = jumpSize;



 while (comparator.greaterThan(item , sortedArray[Math.min(blockEnd, arraySize )-1])) {
  blockStart = blockEnd;
  blockEnd += jumpSize;


  if (blockStart > arraySize) {
    return -1;
  }

 }

  let currentIndex = blockStart;
  while (currentIndex < Math.min(blockEnd, arraySize)) {
    if (comparator.equal(sortedArray[currentIndex], item)) {
      return currentIndex;
    }

    currentIndex += 1;
  }
  return -1;
}