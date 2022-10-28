import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@mui/material';

const ProductSort = ({ sortValue, onChange }) => {
   const handleSortChange = (event, value) => {
      onChange && onChange(event, value);
   };
   return (
      <Tabs
         value={sortValue}
         onChange={handleSortChange}
         textColor='primary'
         indicatorColor='primary'
         aria-label='sort tab'
      >
         <Tab value='salePrice:asc' label='Giá Tăng Dần' />
         <Tab value='salePrice:desc' label='Giá Giảm Dần' />
      </Tabs>
   );
};

ProductSort.propTypes = {
   sortValue: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
};

export default ProductSort;
