import React from 'react';
import Grid from '@material-ui/core/Grid'

const Pagination = () => {
  return (
    <Grid container justify='flex-end'>
      <Grid item md={6}>
        <Grid container>
          <Grid item md={2}>
            First
          </Grid>
          <Grid item md={2}>
            Previous
          </Grid>
          <Grid item md={2}>
            1
          </Grid>
          <Grid item md={2}>
            ...
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Pagination;