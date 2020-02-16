import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Toggle from "components/util/Toggle";
import PartialDrawer from "./PartialDrawer";
import routes from "router/routes";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex"
	},
	drawer: {
		[theme.breakpoints.up("md")]: {
			flexShrink: 0,
			width: drawerWidth
		}
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("md")]: {
			display: "none"
		}
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3)
	}
}));

const Header = ({ setThemeMode, currentTheme }) => {
	const [modeChecked, setModeChecked] = useState(false);
	
	const handleChange = event => {
    setModeChecked(event.target.checked);
    const didChooseDarkMode = event.target.checked ? "dark" : "light"
		setThemeMode(didChooseDarkMode);
		window.localStorage.setItem( "persistedMode", JSON.stringify(didChooseDarkMode));
	};

	const classes = useStyles();
	const preselectedMode = currentTheme && currentTheme === "dark";

	useEffect(() => {
		setModeChecked(preselectedMode);
	}, [currentTheme, preselectedMode]);

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
          <Typography variant="h6" noWrap>
            iHeart Media Challenge
          </Typography>
				</Toolbar>
			</AppBar>
			<nav className={classes.drawer}>
				<Hidden smDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper
						}}
						variant="permanent"
						open
					>
						<PartialDrawer routes={routes} toolbar={classes.toolbar} />
						<div className="bottom-div">
							<Toggle
								modeChecked={modeChecked}
								handleChange={handleChange}
								textPrompt={"Dark Mode"}
							/>
						</div>
					</Drawer>
				</Hidden>
			</nav>
		</div>
	);
};

Header.propTypes = {
	setThemeMode: PropTypes.func,
	currentTheme: PropTypes.string
};

export default Header;
