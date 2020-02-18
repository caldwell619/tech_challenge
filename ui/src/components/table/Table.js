import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader'
import TableItem from './TableItem'

const Table = props => {
  const { headers, itemsToDisplay, headersHaveSorting, 
    currentlySortedCategory, handleSortClickAscending, handleSortClickDescending, textWhenNoItemsPresent } = props
  let tableItems = ( <div>{textWhenNoItemsPresent}</div> )
  if(itemsToDisplay.length){
    tableItems = itemsToDisplay.map((item, index) => (
      <TableItem item={item} index={index} key={`item-data-${Math.random()}-${index}`}/>)
    )
  }
  return (
    <div className='table'>
      <div className='table-row'>
        {headers.map(category => (
          <TableHeader
            headersHaveSorting={headersHaveSorting}
            category={category} 
            handleSortClickAscending={handleSortClickAscending} 
            handleSortClickDescending={handleSortClickDescending}
            currentlySortedCategory={currentlySortedCategory}
            key={category.programmaticCategory}
          />
        ))}
      </div>
        {tableItems}
    </div>
  );
};

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.object),
  itemsToDisplay: PropTypes.arrayOf(PropTypes.object),
  headersHaveSorting: PropTypes.bool,
  currentlySortedCategory: PropTypes.object,
  handleSortClickAscending: PropTypes.func,
  handleSortClickDescending: PropTypes.func,
  textWhenNoItemsPresent: PropTypes.string,
};

export default Table;