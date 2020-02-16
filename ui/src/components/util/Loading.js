import React from "react";
import PropTypes from "prop-types";
import Spinner from "@material-ui/core/CircularProgress";
import { LoadingContext } from "context/LoadingContext";

const Loading = () => (
	<LoadingContext.Consumer>
		{({ isLoading }) => {
			return isLoading ? (
				<div className="spinner-container">
					<Spinner className="spinner" />
				</div>
			) : (
					<div />
				);
		}}
	</LoadingContext.Consumer>
);

Loading.propTypes = {
	isLoading: PropTypes.bool
};

export default Loading;
