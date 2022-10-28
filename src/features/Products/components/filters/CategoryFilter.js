import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import categoryApi from 'api/axios/categoryApi';
import { makeStyles } from '@mui/styles';
import { blue, red } from '@mui/material/colors';
const useStyles = makeStyles({
   category_item: {
      transition: 'all ease 0.1s',
      fontWeight: 500,
      '&:hover': {
         color: blue.A200,
      },
   },
});

const CategoryFilter = ({ onCategoryChange }) => {
   const classes = useStyles();
   const [categories, setCategories] = useState([]);
   useEffect(() => {
      try {
         (async () => {
            const listCategory = await categoryApi.getAll();
            setCategories(
               listCategory.map((item) => {
                  return {
                     id: item.id,
                     name: item.name,
                  };
               })
            );
         })();
      } catch (error) {
         console.log('failed to fetch categories');
      }
   }, []);
   const handleClickCategory = (item) => {
      onCategoryChange &&
         onCategoryChange({
            'category.id': item.id,
         });
   };
   return (
      <Box sx={{ margin: 0, padding: 0, listStyleType: 'none' }} component='ul'>
         <Typography sx={{ fontWeight: '500', fontSize: '18px' }}>DANH MỤC SẢN PHẨM</Typography>
         {categories.map((item, index) => {
            return (
               <Typography
                  className={classes.category_item}
                  sx={{ cursor: 'pointer', fontWeight: 500 }}
                  key={item.id}
                  onClick={() => handleClickCategory(item)}
               >
                  {item.name}
               </Typography>
            );
         })}
      </Box>
   );
};

CategoryFilter.propTypes = {
   onCategoryChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
