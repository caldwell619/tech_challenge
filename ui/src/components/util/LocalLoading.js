import React from "react";
import PropTypes from "prop-types";
import Spinner from "@material-ui/core/CircularProgress";

const Loading = ({ isLoading }) => {
  return isLoading ? (
    <div className="spinner-container">
      <Spinner className="spinner" />
    </div>
  ) : (
      <div />
    );
}

Loading.propTypes = {
	isLoading: PropTypes.bool
};

export default Loading;
