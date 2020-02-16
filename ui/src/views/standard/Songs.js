import React from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import songs from 'data/songs'

const Songs = props => {
  return (
    <Grid container spacing={7}>
      <Typography>
        Customer Information
      </Typography>
      <Grid item container xs={12} justify="space-between" >
        <Grid item xs={2} >
          One
        </Grid>
      </Grid>
    </Grid>
        
  );
};

export default Songs;