import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from "@material-ui/core/styles";
import useInput from "hooks/useInput";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  }
}));

const Search = ({ handleSearch }) => {
  const classes = useStyles();

  const [ searchTerm, setSearchTerm ] = useState('')
  // const { value: searchTerm, bind: bindSearchTerm } = useInput("");

  const handleSubmit = event => {
    event.preventDefault();
    const incomingSearchTerm = event.target.value
    setSearchTerm(incomingSearchTerm)
    handleSearch(incomingSearchTerm)
  }

  return (
    <Grid container component='form' justify='space-between' alignItems='center' noValidate>
      <Grid item className="search-term-cont" md={7}>
        <TextField
          fullWidth
          variant="outlined"
          label="Search"
          value={searchTerm}
          onChange={handleSubmit}
        />
      </Grid>
      <Grid item className="search-term-cta" md={4}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="medium"
          onClick={handleSubmit}
        >
          Search <SearchIcon className={classes.rightIcon} />
        </Button>
      </Grid>
    </Grid>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func,  
};

export default Search;