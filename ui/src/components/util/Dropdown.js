import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const DropDown = props => {
	const { 
		title, options, update, value } = props;
	const updateValue = event => {
		update(event.target.value);
	};
	return (
		<TextField
			select
			fullWidth
			label={title}
			onChange={updateValue}
			value={value}
			variant="outlined"
		>
			{options.map(option => (
				<MenuItem key={option} value={option}>
					{option}
				</MenuItem>
			))}
		</TextField>
		
	);
};

DropDown.propTypes = {
	title: PropTypes.string,
	options: PropTypes.array,
	update: PropTypes.func,
	value: PropTypes.any,
	marginType: PropTypes.string,
};

export default DropDown;