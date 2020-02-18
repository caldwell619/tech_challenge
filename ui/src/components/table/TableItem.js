import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography'
import useTheme from "@material-ui/core/styles/useTheme";

const TableItem = ({ item, index }) => {
  const theme= useTheme()
  const colorToAdd = theme.palette.action.selected

  const backgroundAlternateStyle = index % 2
    ? {backgroundColor: colorToAdd}
    : null
  return (
    <div className="table-row" key={`individual-item-row-${index}`}>
      <Typography 
        key={`individual-item-number-${index + Math.random()}`} 
        component='div' 
        variant='body1' 
        className='table-cell'
        style={backgroundAlternateStyle}
      >
        {index + 1}
      </Typography>
      {Object.values(item).map(dataPoint => {
        return (
          <Typography 
            key={`individual-dataPoints-${dataPoint}-${index + Math.random()}`}
            component='div' 
            variant='body1' 
            className='table-cell'
            style={backgroundAlternateStyle}
          >
            {dataPoint}
          </Typography>
        )
      })}
    </div>
  );
};

TableItem.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
};

export default TableItem;