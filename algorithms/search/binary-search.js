const iterativeBinarySearch = (array, value) => {
  let startIndex = 0;
  let endIndex = array.length - 1;
  let middleIndex = 0;
  while (startIndex <= endIndex) {
    middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (array[middleIndex] === value) {
      return array[middleIndex];
    } else if (value < array[middleIndex]) {
      endIndex = middleIndex - 1;
    } else {
      startIndex = middleIndex + 1;
    }
  }

  return -1;
};

const recursiveBinarySearch = (array, value) => {
  const binarySearch = (startIndex, endIndex, array, value) => {
    const middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (array[middleIndex] === value) {
      return array[middleIndex];
    } else if (startIndex === endIndex) {
      return -1;
    } else if (value < array[middleIndex]) {
      return binarySearch(startIndex, middleIndex - 1, array, value);
    } else {
      return binarySearch(middleIndex + 1, endIndex, array, value);
    }
  };

  return binarySearch(0, array.length - 1, array, value);
};
