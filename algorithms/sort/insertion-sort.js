const insertionSort = array => {
  for (let i = 1; i < array.length; i++) {
    // Store the current value to move
    let valueToMove = array[i];
    let j = 0;

    // Loop through the items in the sorted part of the array (from the current value to the beginning)
    // until a smaller value is found
    for (j = i - 1; j >= 0 && array[j] > valueToMove; j--) {
      // Copy each item to the next one
      array[j + 1] = array[j];
    }
    // j is the first value less than or equals to the value to move
    // So we "place" the value on its right
    array[j + 1] = valueToMove;
  }

  return array;
};
