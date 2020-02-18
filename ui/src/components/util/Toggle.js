import React from "react";
import PropTypes from "prop-types";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const Toggle = ({ modeChecked, handleChange, textPrompt }) => {
	return (
		<div className="toggle-cont">
			<div>
				<FormGroup row>
					<FormControlLabel
						control={
							<Switch
								checked={modeChecked}
								onChange={handleChange}
								value="true"
							/>
						}
						label={textPrompt}
					/>
				</FormGroup>
			</div>
		</div>
	);
};

Toggle.propTypes = {
	modeChecked: PropTypes.bool,
	handleChange: PropTypes.func,
	textPrompt: PropTypes.string
};

export default Toggle;
