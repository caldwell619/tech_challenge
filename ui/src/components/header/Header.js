import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import useTheme from "@material-ui/core/styles/useTheme";

import Toggle from "components/util/Toggle";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex"
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1
	},
}));

const Header = ({ setThemeMode, currentTheme }) => {
	const theme = useTheme();
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
						<Grid container>
							<Grid item md={4}>
								<Typography variant="h6" noWrap>
									iHeart Media Challenge
								</Typography>
							</Grid>
							<Grid item md={8} container>
								<Grid item md={4} justify="center" alignItems="center">
									<Toggle
										modeChecked={modeChecked}
										handleChange={handleChange}
										textPrompt={"Dark Mode"}
									/>
								</Grid>
								<Grid item md={4} container justify="center" alignItems="center">
									<Link component={RouterLink} to="/songs" style={{ color: theme.palette.text.primary }}>
										Standard Table
									</Link>
								</Grid>
								<Grid item md={4} container justify="center" alignItems="center">
									<Link component={RouterLink} to="/extra/songs" style={{ color: theme.palette.text.primary }}>
										Table with Extras
									</Link>
								</Grid>
							</Grid>
						</Grid>
					</Toolbar>
				</AppBar>
			</div>
	);
};

Header.propTypes = {
	setThemeMode: PropTypes.func,
	currentTheme: PropTypes.string
};

export default Header;
