const quickSort = (array = [-7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8], low = 0, high = array.length-1) => {

  if(array.length===1) {
    return array;
  }

  console.log(array, low , high)
 
  if(low >= high) {
    return;
  }

  const pivot = low;
  let left = low +1;
  let right = high;

  while(left<=right) {
    if(array[left] > array[pivot] && array[pivot ] > array[right]) {
      swap(left, right , array);
      left ++;
      right--;
    }
    if(array[left] <= array[pivot]) {
      left++;
    }
    if(array[right] >= array[pivot]) {
      right--;
    }

  }
  swap(pivot, right , array);

  const leftSmall = right-1 - low < high - (right+1)

  if(leftSmall) {
    quickSort(array, low, right-1) ;
    quickSort(array, right+1, high);
  }

  else {
    quickSort(array, right+1, high);
    quickSort(array, low, right-1) ;
   
  }

  console.log(array)
  return array;
}






function swap(i, j, array) {
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}




const k = quickSort()
console.log(k)