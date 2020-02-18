import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Header from 'components/header/Header'
import Main from 'views/Main'
import Songs from 'views/standard/Songs'
import ExtraSongs from 'views/extra/Songs'

const Router = props => {
	return (
		<Fragment>
			<Header {...props}/>
			<main className="main">
				<Switch>
					<Route path="/extra/songs" component={ExtraSongs} />
					<Route path="/songs" component={Songs} />
					<Route path="/" component={Main} />
				</Switch>
			</main>
		</Fragment>
	)
};

export default Router;