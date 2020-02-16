import React, { useState } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Router from "router/Router";
import Loading from "components/util/Loading";
import { LoadingContext } from "context/LoadingContext";
import "styles/main.sass";

const persistedMode = JSON.parse(window.localStorage.getItem("persistedMode"));

export default () => {
	const [themeMode, setThemeMode] = useState(persistedMode || "light");
	const theme = createMuiTheme({
		palette: {
			type: themeMode, // Switching the dark mode on is a single property value change.
			},
	});

	const [isLoading, toggleLoading] = useState(false);

	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<LoadingContext.Provider value={{ isLoading, toggleLoading }}>
					<Loading />
					<div className="content-window">
						<Router currentTheme={themeMode} setThemeMode={setThemeMode} />
					</div>
				</LoadingContext.Provider>
			</div>
		</ThemeProvider >
	);
};