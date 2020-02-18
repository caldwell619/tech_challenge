import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'

const Search = ({ handleSearch }) => {
  const [ searchTerm, setSearchTerm ] = useState('')
  const handleSubmit = event => {
    event.preventDefault();
    const incomingSearchTerm = event.target.value
    setSearchTerm(incomingSearchTerm)
    handleSearch(incomingSearchTerm)
  }

  return (
    <Grid container component='form' justify='flex-end' noValidate>
      <Grid item className="search-term-cont" md={7}>
        <TextField
          fullWidth
          variant="outlined"
          label="Search"
          value={searchTerm}
          onChange={handleSubmit}
        />
      </Grid>
    </Grid>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func,  
};

export default Search;