import React, { Fragment } from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import NavLink from "./NavLink";

const PartialDrawer = ({ toolbar, closeDrawer, routes }) => {
	return (
		<div className="drawer-cont">
			<div className={toolbar} />
			<List>
				{routes.map((route, index) => (
					<Fragment key={index}>
						<NavLink {...route} drawerToggle={closeDrawer} />
					</Fragment>
				))}
			</List>
			<div />
		</div>
	);
};

PartialDrawer.propTypes = {
	toolbar: PropTypes.string,
	closeDrawer: PropTypes.func,
	routes: PropTypes.arrayOf(PropTypes.object)
};

export default PartialDrawer;
