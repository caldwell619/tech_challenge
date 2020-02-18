import React, { useState, useEffect, useRef } from 'react';
import LocalLoading from 'components/util/LocalLoading'
import Table from 'components/table/Table'
import TableDisplay from 'components/table/DisplayInformation'
import client from 'client'
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
  const numberOfPages = Math.round(numberOfSongs / numberOfItemsPerPage)
  

  const searchThroughSongs = searchTerm => {
    const filteredSongs = filterSongs(baseSongs, searchTerm)
    setAvailableSongs(filteredSongs)
  }

  const fetchSongs = async pageNumber => {
    setIsLoading(true)
    const { data } = await client.get('/songs/extra', {
      params: {
        numberOfItemsPerPage,
        currentPage: pageNumber
      }
    })
    setAvailableSongs(data.songs)
    setBaseSongs(data.songs)
    setNumberOfSongs(data.numberOfSongs)
    setIsLoading(false)
  }

  const pageUpdateHandler = async updatedPageNumber => {
    await fetchSongs(updatedPageNumber)
    console.log('page number', updatedPageNumber)
  }

  useEffect(() => {
    const initializeSongs = async () => {
      try {
        await fetchSongs(1)
      } catch(error){
        setIsLoading(false)
        console.error(error)
      }
    }
    initializeSongs()
  }, [])

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
  console.log('num of pages', numberOfPages)

  return (
    <div>
      <div>**Same table, but with searching and pagination done server side</div>
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
        setNumberOfItemsPerPage={setNumberOfItemsPerPage}
      />
    </div>
  );
};

export default Songs;