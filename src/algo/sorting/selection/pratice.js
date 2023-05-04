const SelectionSort = (array=[7,6,2,1,2,3,4,56,78,9,1,3,4,5]) => {


  for(let i=0;i<array.length-1;i++) {
    let min = i;

    for(let j=i+1; j<array.length;j++) {
      if(array[min]>array[j]) {
        min = j;
      }
    }
    if(min !==i) {
      [array[min], array[i]] = [array[i], array[min]] 
    }
  }

  console.log(array)
}
  

SelectionSort()