import React from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import useTheme from '@material-ui/core/styles/useTheme'

const Main = () => {
  const theme = useTheme()
  return (
    <Grid container className='splash-header'>
      <Grid item>
        <Typography variant='h3'>
          Welcome!
        </Typography>
      </Grid>
      <Grid container item className="splash-text">
        <Grid item>
          <Typography variant='h5'>
            This is the submission for Christopher Caldwell's coding challenge submission
          </Typography>
        </Grid>
      </Grid>
      <Grid container item className="splash-text">
        <Grid item>
          <Typography variant='h6'>
            The links on the app bar will take you to the perspective versions. 
          </Typography>
          <Typography variant='h6'>
            Standard table is exactly what was asked for. Table with extras is the same table with a little extra.
          </Typography>
        </Grid>
      </Grid>
      <Grid container item className="splash-text">
        <Grid item>
          <Link variant='subtitle2' href="https://github.com/caldwell619" style={{ color: theme.palette.text.primary }}>Here is the repository</Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Main;