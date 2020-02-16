import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Category from 'components/songs/Category'
import Search from 'components/songs/Search'
import IndividualSong from 'components/songs/IndividualSong'
import LocalLoading from 'components/util/LocalLoading'
import { categoriesOfMetrics } from 'data/songsMetaData'
import { filterSongs } from 'util/logicHelper'

import client from 'client'

// local songs - no need for api
// import songs from 'data/songs'

// any state change on this page is very slow due to all the songs being shown. If pagination could be implemented, that would help a great deal.
const Songs = () => {
  const [availableSongs, setAvailableSongs] = useState([])
  const [baseSongs, setBaseSongs] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentSortCategory, setCurrentSortCategory] = useState('')

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        setIsLoading(true)
        const { data } = await client.get('/songs')
        setAvailableSongs(data)
        setBaseSongs(data)
        setIsLoading(false)
      } catch(error){
        setIsLoading(false)
        console.error(error)
      }
    }
    fetchSongs()
  }, [])

  const numberOfSongs = availableSongs.length

  const promiseHandlerForSearch = searchTerm => {
    return new Promise((resolve) => {
      const filteredSongs = filterSongs([...baseSongs], searchTerm)
      setAvailableSongs(filteredSongs)
      resolve()
    })
  }

  const handleSearch = async searchTerm => {
    setIsLoading(true)
    await promiseHandlerForSearch(searchTerm)
    setIsLoading(false)
  }
  
  const handleSortClick = category => {
    setCurrentSortCategory(category)
  }

  return (
    <div>
      <LocalLoading isLoading={isLoading}/>
      <Grid container justify='flex-start' alignItems='center'>
        <Grid item md={4}>
          <Typography variant='h2' >Available Songs</Typography>
        </Grid>
        <Grid item md={2}>
          <Typography variant='h6'>{numberOfSongs} Results</Typography>
        </Grid>
        <Grid item md={6}>
          <Search handleSearch={handleSearch}/>
        </Grid>
      </Grid>
      <div className="songs-container">
        <div className='table'>
          <div className='table-row'>
            {categoriesOfMetrics.map(category => (
              <Category 
                category={category} 
                handleSortClick={handleSortClick} 
                isCurrentlySorted={category.programmaticCategory === currentSortCategory}
                key={category.programmaticCategory}
              />
            ))}
          </div>
            {availableSongs.map((song, index) => <IndividualSong song={song} index={index} key={`song-data-${Math.random()}-${index}`}/>)}
        </div>
      </div>
    </div>
  );
};

export default Songs;