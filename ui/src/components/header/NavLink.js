import React, { Fragment } from "react";
import { Link as RouterLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import useTheme from "@material-ui/core/styles/useTheme";
import PropTypes from "prop-types";

const NavLink = ({ icon, routePath, linkText, useDivider, dividerText, id }) => {
	const theme = useTheme();
	if(useDivider){
		return (
			<Fragment key={id}>
				<Divider/>
				<Typography className='nav-subtitle-text'>{dividerText}</Typography>
			</Fragment>
		)
	}
	return (
		<div key={id}>
			<Link
				component={RouterLink}
				to={routePath || ''}
				style={{ color: theme.palette.text.primary }}
			>
				<ListItem button>
					<ListItemIcon>{icon}</ListItemIcon>
					<ListItemText primary={linkText} />
				</ListItem>
			</Link>
		</div>
	);
}

NavLink.propTypes = {
	icon: PropTypes.any,
	routePath: PropTypes.string,
	linkText: PropTypes.string,
	useDivider: PropTypes.bool,
	id: PropTypes.number,
	dividerText: PropTypes.string,
};

export default NavLink;