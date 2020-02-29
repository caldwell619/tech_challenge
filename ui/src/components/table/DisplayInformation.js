import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Search from 'components/songs/Search'

const DisplayInformation = props => {
  const { header, numOfResults, hasSearch ,handleSearch, hasSorting, currentlySortedCategory, currentNumberOfSorts } = props
  // allows for the table to be used without the sorting mechanism
  let sortingSection = null
  if(hasSorting){
    let orderByText
    if(currentlySortedCategory.isAscendingOrder){
      orderByText = 'Ascending'
    } else if(currentlySortedCategory.isAscendingOrder === false){
      orderByText = 'Descending'
    } else {
      orderByText = 'Original'
    }
    sortingSection = (
      <Grid container spacing={1} justify='flex-start' alignItems='center'>
        <Grid item>
          <Typography variant='h5' >Sorted By:</Typography>
        </Grid>
        <Grid item md={5}>
          <Typography variant='h5' style={{marginLeft: '4%'}}>
            {currentlySortedCategory.categoryText} {orderByText}
          </Typography>
        </Grid>
      </Grid>
    )
  }
  // allows for the table to be used without the searching mechanism
  let searchBar = null
  if(hasSearch){
    searchBar = (
      <Grid item md={6}>
        <Search handleSearch={handleSearch}/>
      </Grid>
    )
  }
  return (
    <Fragment>
      <Grid container justify='flex-start' alignItems='center'>
        <Grid item md={4}>
          <Typography variant='h2' >{header}</Typography>
        </Grid>
        <Grid item md={2}>
          <Typography variant='h6'>{numOfResults} Results</Typography>
        </Grid>
        {searchBar}
        <Grid container>
          <Grid item md={4}>
            <Typography variant='h5' >Number Of Times Sorted</Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant='h6'>{currentNumberOfSorts}</Typography>
          </Grid>
        </Grid>
      </Grid>
      {sortingSection}
    </Fragment>
  );
};

DisplayInformation.propTypes = {
  header: PropTypes.string,
  numOfResults: PropTypes.number,
  handleSearch: PropTypes.func,
  hasSorting: PropTypes.bool,
  currentlySortedCategory: PropTypes.object,
  currentNumberOfSorts: PropTypes.number,
};

export default DisplayInformation;