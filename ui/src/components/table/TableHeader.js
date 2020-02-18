import React from 'react';
import PropTypes from 'prop-types';
import useTheme from "@material-ui/core/styles/useTheme";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { green } from '@material-ui/core/colors';


const TableHeader = ({ category, handleSortClickAscending, handleSortClickDescending, currentlySortedCategory, headersHaveSorting }) => {
  const theme= useTheme()
  const colorToAdd = theme.palette.action.selected

  const { categoryText, programmaticCategory } = category
  const handleClick = isAscendingSortOrder => {
    isAscendingSortOrder
      ? handleSortClickAscending(category)
      : handleSortClickDescending(category) 
  }

  const isCurrentlySorted = currentlySortedCategory.programmaticCategory === category.programmaticCategory
  const isAscendingSort = currentlySortedCategory.isAscendingOrder
    ? true
    : false

  let descendingSortIcon = null 
  if(programmaticCategory !== 'number' && headersHaveSorting){
    const colorOfIcon = isCurrentlySorted && !isAscendingSort
    ? { color: green['A400'] }
    : null
    descendingSortIcon = ( 
      <ArrowDownwardIcon fontSize="small" className='sort-icon' onClick={() => handleClick(false)} style={colorOfIcon}/>
    )
  }
  let ascendingSortIcon = null 
  if(programmaticCategory !== 'number' && headersHaveSorting){
    const colorOfIcon = isCurrentlySorted && isAscendingSort
    ? { color: green['A400'] }
    : null
    ascendingSortIcon = ( 
      <ArrowUpwardIcon fontSize="small" className='sort-icon' onClick={() => handleClick(true)} style={colorOfIcon}/>
    )
  }

  return (
    <div className="table-cell sticky" key={`category-${category}`} style={{backgroundColor: colorToAdd}}>
      <span>{categoryText}</span>
      <span style={{marginTop: '5px', marginLeft: '15px'}}>{descendingSortIcon}</span>
      <span style={{marginTop: '5px', marginLeft: '5px'}}>{ascendingSortIcon}</span>
    </div>
  );
};

TableHeader.propTypes = {
  category: PropTypes.object,
  handleSortClick: PropTypes.func,
  currentlySortedCategory: PropTypes.object,
};

export default TableHeader;