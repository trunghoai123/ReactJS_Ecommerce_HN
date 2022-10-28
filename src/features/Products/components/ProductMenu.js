import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link } from '@mui/material';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { blueGrey } from '@mui/material/colors';

const useStyles = makeStyles({
   menu_item: {
      padding: '12px',
      '& a': {
         textDecoration: 'none',
         color: 'black',
         '&:hover': {
            color: 'blueviolet',
         },
         '&.active': {
            color: 'blue',
         },
      },
   },
});
const ProductMenu = () => {
   const classes = useStyles();
   const { url } = useRouteMatch();
   return (
      <Box component='div' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
         <Box className={classes.menu_item}>
            <Link component={NavLink} to={`${url}`} exact>
               Description
            </Link>
         </Box>
         <Box className={classes.menu_item}>
            <Link component={NavLink} to={`${url}/additional`} exact>
               Additional
            </Link>
         </Box>
         <Box className={classes.menu_item}>
            <Link component={NavLink} to={`${url}/reviews`} exact>
               Reviews
            </Link>
         </Box>
      </Box>
   );
};

ProductMenu.propTypes = {};

export default ProductMenu;
