const bubbleSort = array => {
  let hasSwap = false;
  do {
    hasSwap = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        [array[i + 1], array[i]] = [array[i], array[i + 1]];
        hasSwap = true;
      }
    }
  } while (hasSwap);

  return array;
};
