import React, { useState, useEffect, useRef } from 'react';
import LocalLoading from 'components/util/LocalLoading'
import Table from 'components/table/Table'
import TableDisplay from 'components/table/DisplayInformation'
import primitiveSort from 'util/sortPrimitives'
import client from 'client'
import Pagination from 'components/table/Pagination'
import { categoriesOfMetrics } from 'data/songsMetaData'

// uncomment for local testing without fetching songs
import songs from 'data/temp-songs'

// any state change on this page is very slow due to all the songs being shown. If pagination could be implemented, that would help a great deal.
const Songs = () => {
  const [availableSongs, setAvailableSongs] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentSortCategory, setCurrentSortCategory] = useState({})
  const numberOfSongs = availableSongs.length

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        setIsLoading(true)
        // const { data } = await client.get('/songs')
        setAvailableSongs(songs)
        setIsLoading(false)
      } catch(error){
        setIsLoading(false)
        console.error(error)
      }
    }
    fetchSongs()
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

  return (
    <div>
      <LocalLoading isLoading={isLoading}/>
      <TableDisplay hasSearch={true} header="Songs" numOfResults={numberOfSongs} hasSorting={true} currentlySortedCategory={currentSortCategory} />
      <div className="songs-container">
        <Table
          itemsToDisplay={availableSongs}
          headers={categoriesOfMetrics}
          currentlySortedCategory={currentSortCategory}
          handleSortClickAscending={handleSortClickAscending}
          handleSortClickDescending={handleSortClickDescending}
          headersHaveSorting={true}
        />
      </div>
      <Pagination/>
    </div>
  );
};

export default Songs;