import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import DOMPurify from 'dompurify';

const Description = ({ content }) => {
   const safeContent = DOMPurify.sanitize(content);
   return <Box sx={{ p: 2 }} dangerouslySetInnerHTML={{ __html: safeContent }}></Box>;
};

Description.propTypes = {};

export default Description;
