import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import 'styles/header.sass'

const ToolBar = () => {
  return (
    <div className="app-bar">
        <Grid container justify='space-between'>
          <Grid item >    
            <Typography variant="h6" noWrap>
              iHeart Media Challenge
            </Typography>
          </Grid>
          <Grid item >    
            <Typography variant="h6" noWrap>
              iHeart Media Challenge
            </Typography>
          </Grid>
        </Grid>
    </div>
  );
};

ToolBar.propTypes = {
  classes: PropTypes.object,
  handleDrawerToggle: PropTypes.func,
};

export default ToolBar