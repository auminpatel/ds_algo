import Comparator from "../../../data-structures/comparator";

export default function binarySearch(sortedArray, item, comparatorFunction) {


  const comparator = new Comparator(comparatorFunction);
  let start = 0;
  let end = sortedArray.length-1;



  while (start<=end) {

    const middleIndex = start + Math.floor((end - start) / 2);
    if (comparator.equal(sortedArray[middleIndex], item)) {
      return middleIndex;
    }
    if(comparator.lessThan(sortedArray[middleIndex], item)) {
      start = middleIndex+1;
    }
    else {
      end = middleIndex-1;
    }
  }
  return -1;
}