const selectionSort = array => {
  for (let i = 0; i < array.length; i++) {
    // Set minimum = current index
    let min = i;

    // Check the rest of the array (the non yet sorted values, from i + n to length - 1)
    // to see if anything is smaller
    for (let j = i + 1; j < array.length; j++) {
      // A value smaller that the previous min is found :
      // Then this value is the new minimum
      if (array[j] < array[min]) {
        min = j;
      }
    }

    // If the minimum isn't already in the position, swap it
    if (i !== min) {
      [array[i], array[min]] = [array[min], array[i]];
    }
  }

  return array;
};
