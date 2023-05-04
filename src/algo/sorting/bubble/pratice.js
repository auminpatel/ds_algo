
export const BubbleSort = (array=[9,4,10,3,45,56,1,3,5,64]) => {

  // we start from 1 since the j handle the value at zero and always less the j= array.length-1 since the largest value after each iteration
  // will reach it final postion
  for(let i=1;i<array.length;i++) {
    // Simple based rule on each iteration we move the largest element to the end of the array , like a bubble 
    // moves to the top
    for(let j=0;j< array.length-i;j++) {
      if(array[j] > array[j+1]) {
          [array[j] , array[j+1]] = [array[j+1] , array[j]]
      }
    }
  }
  console.log(array)
}


BubbleSort()