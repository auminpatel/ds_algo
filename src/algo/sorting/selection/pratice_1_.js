const selectionSort = (array) => {


  for(let i=0;i<array.length-1;i++ ) {
   let min = i;

    for(let j=i+1; j<array.length;j++) {
      if(array[min] > array[j]) {
        min = j
      }

      if(i !== min) {
        [array[i] , array[min]] = [array[min] , array[i]]
      }
    }
  }
  console.log(array)
}


selectionSort([3,1,5,2,6,4])