import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader'
import TableItem from './TableItem'

const Table = props => {
  const { headers, itemsToDisplay, headersHaveSorting, currentlySortedCategory, handleSortClickAscending, handleSortClickDescending } = props
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
        {itemsToDisplay.map((item, index) => (
          <TableItem item={item} index={index} key={`item-data-${Math.random()}-${index}`}/>)
        )}
    </div>
  );
};

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.object),
  itemsToDisplay: PropTypes.arrayOf(PropTypes.object),
  headersHaveSorting: PropTypes.bool,
  currentlySortedCategory: PropTypes.string,
  handleSortClickAscending: PropTypes.func,
  handleSortClickDescending: PropTypes.func,
};

export default Table;