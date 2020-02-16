import React, { Fragment, useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Toggle from 'components/util/Toggle'
import NavLink from './NavLink'
import AppBar from './AppBar'

import routes from 'router/routes'

import 'styles/header.css'


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer({ container, setThemeMode, currentTheme, }) {
  
  const classes = useStyles();
  const theme = useTheme();
  const [modeChecked, setModeChecked] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleModeChange = event => {
		setModeChecked(event.target.checked);
		setThemeMode(event.target.checked ? "dark" : "light");
		window.localStorage.setItem(
			"persistedMode",
			JSON.stringify(event.target.checked ? "dark" : "light")
		);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // toggle component expects boolean
  const preselectedMode = currentTheme && currentTheme === 'dark'

  useEffect(() => {
		setModeChecked(preselectedMode);
	}, [currentTheme, preselectedMode]);

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List className="nav-items">
        {routes.map(NavLink)}
      </List>
      <Toggle
        modeChecked={modeChecked}
        handleChange={handleModeChange}
        textPrompt={"Dark Mode"}
      />
    </div>
  );

  return (
    <Fragment>
      <CssBaseline />
      <AppBar classes={classes} handleDrawerToggle={handleDrawerToggle}/>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </Fragment>
  );
}

export default ResponsiveDrawer;