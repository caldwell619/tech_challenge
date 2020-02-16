const swapElements = (arrayOfElements, indexOfFirst, indexOfSecond) => {
  // capture the element of the first index position
  const originalFirstItem = arrayOfElements[indexOfFirst]
  // perform the first change
  arrayOfElements[indexOfFirst] = arrayOfElements[indexOfSecond]
  // set the index of second to the original captured
  arrayOfElements[indexOfSecond] = originalFirstItem
}

const findMiddleIndexOfPartition = (leftIndex, rightIndex) => {
  return Math.floor((rightIndex + leftIndex) / 2)
}

const determinePartitionIndexPosition = (items, leftIndex, rightIndex, objectPropertyToSortBy) => {
  const pivotIndex = findMiddleIndexOfPartition(leftIndex, rightIndex)
  const pivotItem = items[pivotIndex][objectPropertyToSortBy]
  let leftIndexPointer = leftIndex
  let rightIndexPointer = rightIndex
  while (leftIndexPointer <= rightIndexPointer) {
      while (items[leftIndexPointer][objectPropertyToSortBy] < pivotItem) {
          leftIndexPointer++;
      }
      while (items[rightIndexPointer][objectPropertyToSortBy] > pivotItem) {
          rightIndexPointer--;
      }
      if (leftIndexPointer <= rightIndexPointer) {
          swapElements(items, leftIndexPointer, rightIndexPointer);
          leftIndexPointer++;
          rightIndexPointer--;
      }
  }
  return leftIndexPointer;
}

const quickSort = (items, leftIndex, rightIndex, objectPropertyToSortBy) => {
  let index
  if (items.length > 1) {
      index = determinePartitionIndexPosition(items, leftIndex, rightIndex, objectPropertyToSortBy); //index returned from partition
      if (leftIndex < index - 1) { //more elements on the left side of the pivot
          quickSort(items, leftIndex, index - 1, objectPropertyToSortBy);
      }
      if (index < rightIndex) { //more elements on the right side of the pivot
          quickSort(items, index, rightIndex, objectPropertyToSortBy);
      }
  }
  return items;
}

export default quickSort