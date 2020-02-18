import dateSort from 'util/dateSort'
const keyOfDateProperty = 'songReleaseDate'

// type agnostic comparison
const ascendingOrderSort = (firstValue, secondValue) => {
  if (firstValue < secondValue) { return -1 }
  if (firstValue > secondValue) { return 1 }
  return 0
}

// type agnostic comparison
const descendingOrderSort = (firstValue, secondValue) => {
  if (firstValue > secondValue) { return -1 }
  if (firstValue < secondValue) { return 1 }
  return 0
}

const determineOrder = (firstValue, secondValue, isAscendingOrder) => {
  return isAscendingOrder
    ? ascendingOrderSort(firstValue, secondValue)
    : descendingOrderSort(firstValue, secondValue) 
}

const sortSongs = (songsToSort, isSortingInAscendingOrder, objectPropertyToSortBy) => {
  const localSongsToSort = [...songsToSort]
  if(objectPropertyToSortBy !== keyOfDateProperty){
    return localSongsToSort.sort((firstVal, secondVal) => {
      return determineOrder(firstVal[objectPropertyToSortBy], secondVal[objectPropertyToSortBy], isSortingInAscendingOrder)
    })
  } else {
    return dateSort(localSongsToSort, isSortingInAscendingOrder)
  } 
}

export default sortSongs