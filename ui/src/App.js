import React, { useState } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import MainRouter from "./router/MainRouter";
import Loading from "./components/Loading";
import persistedUser, { UserContext } from "./context/UserContext";
import { LoadingContext } from "./context/LoadingContext";
import "./css/App.css";

const persistedMode = JSON.parse(window.localStorage.getItem("persistedMode"));

export default () => {
	const [themeMode, setThemeMode] = useState(persistedMode || "light");
	const theme = createMuiTheme({
		palette: {
			type: themeMode, // Switching the dark mode on is a single property value change.
			},
	});

	const [isLoading, toggleLoading] = useState(false);
	const [user, updateUser] = useState(persistedUser || null);

	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<UserContext.Provider value={{ user, updateUser }}>
					<LoadingContext.Provider value={{ isLoading, toggleLoading }}>
						<Loading />
						<div className="content-window">
              <MainRouter user={user} currentTheme={themeMode} setThemeMode={setThemeMode} />
						</div>
					</LoadingContext.Provider>
				</UserContext.Provider>
			</div>
		</ThemeProvider >
	);
};