import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Header from 'components/header/AppBar'
import Main from 'views/Main'
import Songs from 'views/standard/Songs'

const Router = props => {
	return (
		<Fragment>
			<Header />
			<main className="main">
				<Switch>
					<Route path="/songs" component={Songs} />
					<Route path="/" component={Main} />
				</Switch>
			</main>
		</Fragment>
	)
};

export default Router;