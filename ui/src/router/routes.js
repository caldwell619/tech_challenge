import React from "react";
import Home from "@material-ui/icons/Home";
import Songs from "@material-ui/icons/LibraryMusic";

const homeRoute = {
	icon: <Home />,
	routePath: "/",
	linkText: "Home"
};
const songsRoute = {
	icon: <Songs />,
	routePath: "/songs",
	linkText: "Songs"
};

export default [homeRoute, songsRoute]