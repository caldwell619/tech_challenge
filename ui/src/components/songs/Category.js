import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography'
import SortIcon from '@material-ui/icons/ImportExport'

const Category = ({ category, handleSortClick }) => {
  const { categoryText, programmaticCategory } = category
  const handleClick = () => {
    handleSortClick(programmaticCategory)
  }
  return (
    <div className="table-cell sticky" key={`catgory-${category}`}>
      <div className='category-name-container'>
        <Typography component='div' variant='body1' className='category-title'>
          {categoryText}
        </Typography>
        <SortIcon className='sort-icon' onClick={handleClick}/>
      </div>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.object,
  handleSortClick: PropTypes.func,
};

export default Category;