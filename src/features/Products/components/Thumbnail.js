import { Box } from '@mui/material';
import { STATIC_HOST } from 'constants';
import PropTypes from 'prop-types';

const Thumbnail = ({ product }) => {
   const imageUrl = product?.thumbnail
      ? `${STATIC_HOST}${product?.thumbnail?.url}`
      : 'https://api.ezfrontend.com/uploads/e2c1e692c76e5aeb99baa2dcef13cdcb_d1f6440e7e.jpg';
   return (
      <Box>
         <img width='100%' src={imageUrl} alt=''></img>
      </Box>
   );
};

Thumbnail.propTypes = {};

export default Thumbnail;
