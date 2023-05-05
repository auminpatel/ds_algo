const sort = (array = [3,2,6]) => {


  if(array.length <= 1) {
    return array;
  }

  const mid = Math.floor(array.length/2)

  const leftArray = array.slice(0, mid);
  const rightArray = array.slice(mid, array.length);

  const leftSortedArray = sort(leftArray);
  const rightSortedArray = sort(rightArray);


  return mergeSortedArray(leftSortedArray, rightSortedArray)
}

const mergeSortedArray = (leftSortedArray, rightSortedArray) => {
  let sortedArray = [];
  let leftPointer = 0;
  let rightPointer = 0;
  
  while(leftPointer < leftSortedArray.length && rightPointer<rightSortedArray.length) {
    let min
    if(leftSortedArray[leftPointer] <= rightSortedArray[rightPointer]) {
       min =  leftSortedArray[leftPointer]
      leftPointer++;
    }

    else {
        min = rightSortedArray[rightPointer]
       rightPointer++;
     }

     sortedArray.push(min)
  }

  return sortedArray.concat(leftSortedArray.slice(leftPointer)).concat(rightSortedArray.slice(rightPointer))
}



const k = sort()

console.log(k)