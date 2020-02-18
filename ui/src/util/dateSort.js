import { compareAsc, compareDesc } from 'date-fns'

const convertStringToDate = stringOfDate => new Date(stringOfDate)

const compareIsFirstDateBeforeSecondDate = (dateOne, dateTwo) => {
  return compareAsc(dateOne, dateTwo)
}

const compareIsFirstDateAfterSecondDate = (dateOne, dateTwo) => {
  return compareDesc(dateOne, dateTwo)
}

const convertStringDateAndCompare = (stringDateOne, stringDateTwo, isSortingInAscendingOrder) => {
  const convertedDateOne = convertStringToDate(stringDateOne)
  const convertedDateTwo = convertStringToDate(stringDateTwo)
  const resultOfComparison = isSortingInAscendingOrder
    ? compareIsFirstDateBeforeSecondDate(convertedDateOne, convertedDateTwo)
    : compareIsFirstDateAfterSecondDate(convertedDateOne, convertedDateTwo)
  return resultOfComparison
}

const sortDateStrings = (firstSongObject, secondSongObject, isSortingInAscendingOrder) => {
  // sort direction determines how they will be ordered. True condition will result in the newest date first
  return convertStringDateAndCompare(firstSongObject.songReleaseDate, secondSongObject.songReleaseDate, isSortingInAscendingOrder)
}

const fullServiceDateSort = (songsToSort, isSortingInAscendingOrder) => {
  const sortedSongs = songsToSort.sort((firstVal, secondVal) => sortDateStrings(firstVal, secondVal, isSortingInAscendingOrder))
  return sortedSongs
}

export default fullServiceDateSort