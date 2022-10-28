import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Box, Chip } from '@mui/material';

const Filter_List = [
   {
      id: 1,
      getLabel: (filters) => 'Free shipping',
      isActive: (filters) => {
         return filters.isFreeShip ? true : false;
      },
      isVisible: (filters) => true,
      isRemovable: (filters) => false,
      onRemove: (filters) => {},
      onToggle: (filters) => {
         const newFilters = { ...filters };
         if (!newFilters.isFreeShip) newFilters.isFreeShip = true;
         else delete newFilters.isFreeShip;
         return newFilters;
      },
   },
   {
      id: 2,
      getLabel: (filters) => 'Discount',
      isActive: (filters) => true,
      isVisible: (filters) => filters.isPromotion,
      // isVisible: (filters) => filters.isPromotion,
      isRemovable: (filters) => true,
      onRemove: (filters) => {
         const newFilters = { ...filters };
         delete newFilters.isPromotion;
         return newFilters;
      },
      onToggle: (filters) => {},
   },
   {
      id: 3,
      getLabel: (filters) => 'Category',
      isActive: (filters) => true,
      isVisible: (filters) => filters['category.id'],
      isRemovable: (filters) => true,
      onRemove: (filters) => {
         const newFilters = { ...filters };
         delete newFilters['category.id'];
         return newFilters;
      },
      onToggle: (filters) => {},
   },
   {
      id: 4,
      getLabel: (filters) => `Từ ${filters.salePrice_gte} - Đến ${filters.salePrice_lte}`,
      isActive: (filters) => true,
      isVisible: (filters) =>
         Object.keys(filters).includes('salePrice_gte') &&
         Object.keys(filters).includes('salePrice_lte'),
      isRemovable: (filters) => true,
      onRemove: (filters) => {
         const newFilters = { ...filters };
         delete newFilters.salePrice_gte;
         delete newFilters.salePrice_lte;
         return newFilters;
      },
      onToggle: (filters) => {},
   },
];

const FilterViewer = ({ filters = {}, onChange = () => {} }) => {
   const visibleFilters = useMemo(() => {
      return Filter_List.filter((item) => item.isVisible(filters));
   }, [filters]);
   return (
      <Box
         sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexFlow: 'row wrap',
            padding: 1,
            rowGap: 1,
            width: '100%',
         }}
      >
         {visibleFilters.map((item) => {
            return (
               <Chip
                  key={item.id}
                  sx={{ mr: 1 }}
                  color={item.isActive(filters) ? 'primary' : 'default'}
                  label={item.getLabel(filters)}
                  onClick={
                     item.isRemovable()
                        ? null
                        : () => {
                             const newFilters = item.onToggle(filters);
                             onChange(newFilters);
                          }
                  }
                  onDelete={
                     item.isRemovable(filters)
                        ? () => {
                             const newFilters = item.onRemove(filters);
                             onChange(newFilters);
                          }
                        : null
                  }
               />
            );
         })}
      </Box>
   );
};

FilterViewer.propTypes = {
   filters: PropTypes.object,
   onChange: PropTypes.func,
};

export default FilterViewer;
