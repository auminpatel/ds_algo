export class BubbleSort extends Sort {
  sort(originalArray, asc) {
    let swapped=false;
    const array = [...originalArray];
    for(let i=0;i<array.length;i++){
      // Call visiting callback.
      this.callbacks.visitingCallback(array[j]);
      for(let j=i;j<array.length;i++) {
        // Call visiting callback.
        this.callbacks.visitingCallback(array[j]);
        if(asc ? this.comparator.greaterThan(array[j + 1], array[j]) :  this.comparator.lessThan(array[j + 1], array[j]))
        [a[j] , a[j+1]] = [a[j+1 ], a[j]];
        swapped = true;
      }
      if(!swapped)
      { // means that array is already in the desired order
        return array;
      }
    
    }
    return array;
  }
}