import React from "react";
import Home from "@material-ui/icons/Home";
import Songs from "@material-ui/icons/LibraryMusic";

export default [
	{
		icon: <Home />,
		routePath: "/",
		linkText: "Home",
		id: 1
	},
	{
		icon: <Songs />,
		routePath: "/songs",
		linkText: "Songs",
		id: 2
	},
	{
		useDivider: true,
		dividerText: 'With Material UI',
		id: 91
	},
	{
		icon: <Songs />,
		routePath: "/material/songs",
		linkText: "Songs",
		id: 3
	}
]