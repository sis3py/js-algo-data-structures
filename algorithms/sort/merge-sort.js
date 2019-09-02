const mergeSort = array => {
  // Compare and merge two array
  const merge = (left, right) => {
    let leftIndex = 0;
    let rightIndex = 0;
    const result = [];

    // Compare left and right arrays side by side
    while (leftIndex < left.length && rightIndex < right.length) {
      // Push the smaller element, from left or right
      // Increment the corresponding cursor : leftIndex or rightIndex
      result.push(
        left[leftIndex] < right[rightIndex]
          ? left[leftIndex++]
          : right[rightIndex++]
      );
    }

    // Given that the while loop stops as soon as left or right has been completely processed,
    // we know that one of the two arrays still have elements that we need to concat to our returned result
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  };

  // Base recursive condition
  if (array.length <= 1) {
    return array;
  }

  // Get the middle index of the given array
  const min = Math.floor(array.length / 2);

  // Get the left part
  const left = array.slice(0, min);

  // Get the right part
  const right = array.slice(min);

  // Merge the two parts, each part beeing recursively merged and sorted
  return merge(mergeSort(left), mergeSort(right));
};
