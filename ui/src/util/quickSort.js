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

const ascendingOrderSort = (items, leftIndex, rightIndex, objectPropertyToSortBy, pivotItem) => {
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
  return leftIndex
}

const descendingOrderSort = (items, leftIndex, rightIndex, objectPropertyToSortBy, pivotItem) => {
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
          swapElements(items, rightIndexPointer, leftIndexPointer);
          leftIndexPointer++;
          rightIndexPointer--;
      }
  }
  return leftIndex
}

const determinePartitionIndexPosition = (items, leftIndex, rightIndex, objectPropertyToSortBy, isSortingInAscendingOrder) => {
  const pivotIndex = findMiddleIndexOfPartition(leftIndex, rightIndex)
  const pivotItem = items[pivotIndex][objectPropertyToSortBy]
  let leftIndexPointer
  if(isSortingInAscendingOrder){
    leftIndexPointer = ascendingOrderSort(items, leftIndex, rightIndex, objectPropertyToSortBy, pivotItem)
  } else {
    leftIndexPointer = descendingOrderSort(items, leftIndex, rightIndex, objectPropertyToSortBy, pivotItem)
  }
  return leftIndexPointer;
}

const quickSort = (items, leftIndex, rightIndex, objectPropertyToSortBy, isSortingInAscendingOrder) => {
  if (items.length < 1) { return items }
  let index
  index = determinePartitionIndexPosition(items, leftIndex, rightIndex, objectPropertyToSortBy, isSortingInAscendingOrder); 
  // more elements on the left side of the pivot
  if (leftIndex < index - 1) { 
      quickSort(items, leftIndex, index - 1, objectPropertyToSortBy, isSortingInAscendingOrder);
  }
  //more elements on the right side of the pivot
  if (index < rightIndex) { 
      quickSort(items, index, rightIndex, objectPropertyToSortBy);
  }
  return items;
}

export default quickSort