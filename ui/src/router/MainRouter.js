import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

const MainRouter = props => {
	console.log("current theme ", currentTheme);
	return (
		<Fragment >
			<Switch>
				<Route path="/" component={Main} />
			</Switch>
		</Fragment>
	)
};

MainRouter.propTypes = {
	setThemeMode: PropTypes.func,
	currentTheme: PropTypes.string,
};

export default MainRouter;