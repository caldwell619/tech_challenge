import { compareAsc } from 'date-fns'

const convertStringToDate = stringOfDate => new Date(stringOfDate)

const compareIsFirstDateBeforeSecondDate = (dateOne, dateTwo) => {
  return compareAsc(dateOne, dateTwo)
}

const convertStringDateAndCompare = (stringDateOne, stringDateTwo) => {
  const convertedDateOne = convertStringToDate(stringDateOne)
  const convertedDateTwo = convertStringToDate(stringDateTwo)
  const resultOfComparison = compareIsFirstDateBeforeSecondDate(convertedDateOne, convertedDateTwo)
  return resultOfComparison
}

const sortDateStrings = (firstSongObject, secondSongObject, isSortingInAscendingOrder) => {
  // sort direction determines how they will be ordered. True condition will result in the newest date first
  return isSortingInAscendingOrder
    ? convertStringDateAndCompare(firstSongObject.songReleaseDate, secondSongObject.songReleaseDate)
    : !convertStringDateAndCompare(firstSongObject.songReleaseDate, secondSongObject.songReleaseDate)
}

const fullServiceDateSort = (songsToSort, isSortingInAscendingOrder) => {
  const sortedSongs = songsToSort.sort((firstVal, secondVal) => sortDateStrings(firstVal, secondVal, isSortingInAscendingOrder))
  return sortedSongs
}

export default fullServiceDateSort