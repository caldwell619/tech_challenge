import React from "react";
import { Link as RouterLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "@material-ui/core/Link";
import useTheme from "@material-ui/core/styles/useTheme";
import Divider from '@material-ui/core/Divider';
import PropTypes from "prop-types";


const NavLink = ({ icon, routePath, linkText, divider }) => {
	const theme = useTheme();
  if (divider) {
		return (
			<Divider className="divider-line"/>
		);
	}	else {
		return (
			<div>
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
};

NavLink.propTypes = {
	icon: PropTypes.any,
	routePath: PropTypes.string,
	linkText: PropTypes.string,
};

export default NavLink;
