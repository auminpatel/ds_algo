import Sort from "../Sorting";

export default class InsertionSort extends Sort {

  sort(originalArray) {

    const array = [...originalArray];

    for(let i=1;i<array.length;i++){
      let currentIndex = i;

      this.callbacks.visitingCallback(array[i]);
      while (array[currentIndex - 1] !== undefined && this.comparator.lessThan(array[currentIndex], array[currentIndex-1])) {

        this.callbacks.visitingCallback(array[currentIndex - 1]);

        // Swap the elements.
        [
          array[currentIndex - 1],
          array[currentIndex],
        ] = [
          array[currentIndex],
          array[currentIndex - 1],
        ];

        currentIndex = currentIndex - 1; 
      }
    }
    return array;
  }
}