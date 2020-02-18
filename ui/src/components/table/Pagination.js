import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const singleUpArgument = 'increase single'
const singleDownArgument = 'decrease single'
const firstPageArgument = 'first'
const lastPageArgument = 'last'

const createModifierEnum = (numberOfPages, currentPage) => ({
  [firstPageArgument]: 1,
  [singleDownArgument]: currentPage - 1,
  [singleUpArgument]: currentPage + 1,
  [lastPageArgument]: numberOfPages
})

const Pagination = props => {
  const { pageUpdateHandler, numberOfPages, numberOfItemsPerPage, setNumberOfItemsPerPage } = props
  const [ currentPage, setCurrentPage ] = useState(1)
  
  const alterPageNumber = modifier => {
    const modifierEnum = createModifierEnum(numberOfPages, currentPage)
    const pageToGoTo = modifierEnum[modifier]
    setCurrentPage(pageToGoTo)
    pageUpdateHandler(pageToGoTo, numberOfItemsPerPage)
  }
  const isPreviousDisabled = currentPage === 1
  const isNextDisabled = currentPage === numberOfPages

  return (
    <Grid container justify='flex-end'>
      <Grid item md={6}>
        <Grid container>
          <Grid item md={2} justify="center" container>
            <Button disabled={isPreviousDisabled} onClick={() => alterPageNumber(firstPageArgument)}>
              First
            </Button>
          </Grid>
          <Grid item md={2} justify="center" container>
            <Button disabled={isPreviousDisabled} onClick={() => alterPageNumber(singleDownArgument)}>
              Previous
            </Button>
          </Grid>
          <Grid item md={2} alignItems="center" justify="center" container>
            {currentPage} of {numberOfPages}
          </Grid>
          <Grid item md={2} justify="center" container>
            <Button disabled={isNextDisabled} onClick={() => alterPageNumber(singleUpArgument)}>
              Next
            </Button>
          </Grid>
          <Grid item md={2} justify="center" container>
            <Button disabled={isNextDisabled} onClick={() => alterPageNumber(lastPageArgument)}>
              Last
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Pagination;