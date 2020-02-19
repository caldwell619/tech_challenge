import React, { useState, useEffect } from 'react';
import client from 'client'
import LocalLoading from 'components/util/LocalLoading'
import Table from 'components/table/Table'
import TableDisplay from 'components/table/DisplayInformation'
import Pagination from 'components/table/Pagination'
import { categoriesOfMetrics } from 'data/songsMetaData'
import { filterSongs } from 'util/searchThroughObjects'
import primitiveSort from 'util/sortPrimitives'

// uncomment for local testing without fetching songs
// import songs from 'data/temp-songs'

// any state change on this page is very slow due to all the songs being shown. If pagination could be implemented, that would help a great deal.
const Songs = () => {
  const [availableSongs, setAvailableSongs] = useState([])
  const [baseSongs, setBaseSongs] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentSortCategory, setCurrentSortCategory] = useState({})
  const [numberOfItemsPerPage, setNumberOfItemsPerPage] = useState(10)
  const [numberOfSongs, setNumberOfSongs] = useState(0)
  const [ currentPage, setCurrentPage ] = useState(1)
  const numberOfPages = Math.round(numberOfSongs / numberOfItemsPerPage)
  

  const searchThroughSongs = searchTerm => {
    const filteredSongs = filterSongs(baseSongs, searchTerm)
    setAvailableSongs(filteredSongs)
  }

  const fetchSongs = async (pageNumber, itemsPerPage) => {
    setIsLoading(true)
    const { data } = await client.get('/songs/extra', {
      params: {
        numberOfItemsPerPage: itemsPerPage,
        currentPage: pageNumber
      }
    })
    setAvailableSongs(data.songs)
    setBaseSongs(data.songs)
    setNumberOfSongs(data.numberOfSongs)
    setIsLoading(false)
  }

  const updateNumberOfItemsPerPageHandler = newNumberOfItems => {
    // changing the number of songs per page brings it back down to one
    setCurrentPage(1)
    setNumberOfItemsPerPage(newNumberOfItems)
  }

  const pageUpdateHandler = updatedPageNumber => {
    setCurrentPage(updatedPageNumber)
  }

  useEffect(() => {
    const initializeSongs = async () => {
      const numberToSendToAPI = numberOfItemsPerPage === 'All'
        ? numberOfSongs
        : numberOfItemsPerPage
      try {
        await fetchSongs(currentPage, numberToSendToAPI)
      } catch(error){
        setIsLoading(false)
      }
    }
    initializeSongs()
  }, [currentPage, numberOfItemsPerPage, numberOfSongs])

  const handleSortClickAscending = ({ programmaticCategory, categoryText }) => {
    const sortedSongsByCategory = primitiveSort(availableSongs, true, programmaticCategory)
    setAvailableSongs(sortedSongsByCategory)
    setCurrentSortCategory({ programmaticCategory, categoryText, isAscendingOrder: true })
  }

  const handleSortClickDescending = ({ programmaticCategory, categoryText }) => {
    const sortedSongsByCategory = primitiveSort(availableSongs, false, programmaticCategory)
    setAvailableSongs(sortedSongsByCategory)
    setCurrentSortCategory({ programmaticCategory, categoryText, isAscendingOrder: false })
  }
  return (
    <div>
      <LocalLoading isLoading={isLoading}/>
      <TableDisplay 
        hasSearch={true} 
        header="Songs" 
        numOfResults={numberOfSongs} 
        hasSorting={true} 
        currentlySortedCategory={currentSortCategory} 
        handleSearch={searchThroughSongs}
      />
      <div className="songs-container">
        <Table
          itemsToDisplay={availableSongs}
          headers={categoriesOfMetrics}
          currentlySortedCategory={currentSortCategory}
          handleSortClickAscending={handleSortClickAscending}
          handleSortClickDescending={handleSortClickDescending}
          headersHaveSorting={true}
          textWhenNoItemsPresent="No items meet search criteria"
        />
      </div>
      <Pagination 
        pageUpdateHandler={pageUpdateHandler} 
        numberOfPages={numberOfPages}
        numberOfItemsPerPage={numberOfItemsPerPage}
        setNumberOfItemsPerPage={updateNumberOfItemsPerPageHandler}
        currentPage={currentPage}
      />
      <div>**Same table, but with searching and pagination done server side. <br/> Changing pages or number of items per pages removes current search</div>
    </div>
  );
};

export default Songs;