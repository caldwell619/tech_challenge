import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Category from 'components/songs/Category'
import Search from 'components/songs/Search'
import IndividualSong from 'components/songs/IndividualSong'
import { categoriesOfMetrics } from 'data/songsMetaData'
import songs from 'data/songs'
import 'styles/songs.sass'

const Songs = () => {
  const [availableSongs, setAvailableSongs] = useState([...songs])
  const numberOfSongs = availableSongs.length

  const handleSearch = searchTerm => {
    console.log('search term',searchTerm)
  }
  const handleSortClick = category => {
    console.log('sort click', category)

  }
  return (
    <div>
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
            {categoriesOfMetrics.map(category => <Category category={category} handleSortClick={handleSortClick} />)}
          </div>
            {availableSongs.map((song, index) => <IndividualSong song={song} index={index} key={`song-data-${Math.random()}-${index}`}/>)}
        </div>
      </div>
    </div>
  );
};

export default Songs;