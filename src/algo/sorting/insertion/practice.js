export const InsertionSort = (array = [1,3,5,1,2,34,1,23,14,17,10,19,10,5]) => {
  
  for(let i=1;i<array.length;i++) {
    for(let j=i; j>=0; j-- ) {
      if(array[j-1] > array[j]) {
        [array[j-1], array[j]] = [array[j], array[j-1]]
      }
    }
  }
  console.log(array)
}



InsertionSort()
