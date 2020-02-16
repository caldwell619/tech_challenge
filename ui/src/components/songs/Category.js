import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography'
import SortIcon from '@material-ui/icons/ImportExport'

const Category = ({ category, handleSortClick, isCurrentlySorted }) => {
  const { categoryText, programmaticCategory } = category
  const handleClick = () => {
    handleSortClick(programmaticCategory)
  }
  const colorOfIcon = isCurrentlySorted
    ? 'primary'
    : 'action'
  return (
    <div className="table-cell sticky" key={`category-${category}`}>
      <div className='category-name-container'>
        <Typography component='div' variant='body1' className='category-title'>
          {categoryText}
        </Typography>
        <SortIcon className='sort-icon' onClick={handleClick} color={colorOfIcon}/>
      </div>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.object,
  handleSortClick: PropTypes.func,
  isCurrentlySorted: PropTypes.bool,
};

export default Category;