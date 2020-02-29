import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LocalLoading from 'components/util/LocalLoading'
import Table from 'components/table/Table'
import TableDisplay from 'components/table/DisplayInformation'
import primitiveSort from 'util/sortPrimitives'
import { categoriesOfMetrics } from 'data/songsMetaData'
import { incrementCount } from 'store/actions/'
// import client from 'client'

// uncomment for local testing without fetching songs
import songs from 'data/temp-songs'

// any state change on this page is very slow due to all the songs being shown. 
const Songs = () => {
  const [availableSongs, setAvailableSongs] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentSortCategory, setCurrentSortCategory] = useState({})
  const numberOfSongs = availableSongs.length
  // Getter
  const count = useSelector(state => state.count);
  // action mapper - allows you to dispatch actions
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        setIsLoading(true)
        // const { data } = await client.get('/songs')
        // setAvailableSongs(data.songs)
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
    // dispatching the action
    dispatch(incrementCount())
    const sortedSongsByCategory = primitiveSort(availableSongs, true, programmaticCategory)
    setAvailableSongs(sortedSongsByCategory)
    setCurrentSortCategory({ programmaticCategory, categoryText, isAscendingOrder: true })
  }

  const handleSortClickDescending = ({ programmaticCategory, categoryText }) => {
    // dispatching the action
    dispatch(incrementCount())
    const sortedSongsByCategory = primitiveSort(availableSongs, false, programmaticCategory)
    setAvailableSongs(sortedSongsByCategory)
    setCurrentSortCategory({ programmaticCategory, categoryText, isAscendingOrder: false })
  }

  return (
    <div>
      <LocalLoading isLoading={isLoading}/>
      <TableDisplay 
        header="Songs" 
        numOfResults={numberOfSongs} 
        hasSorting={true} 
        currentlySortedCategory={currentSortCategory} 
        currentNumberOfSorts={count}
      />
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
    </div>
  );
};

export default Songs;