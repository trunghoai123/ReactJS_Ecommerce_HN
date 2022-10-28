import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
   pagination: PropTypes.object.isRequired,
   onPageChange: PropTypes.func,
};
Pagination.defaultProps = {
   onPageChange: () => {},
};

function Pagination({ pagination, onPageChange }) {
   const { _page, _limit, _totalRows } = pagination;
   const totalPages = Math.ceil(_totalRows / _limit);
   const handlePagePrev = () => {
      if (_page > 1) {
         onPageChange(_page - 1);
      }
   };
   const handlePageNext = () => {
      if (_page < totalPages) {
         onPageChange(_page + 1);
      }
   };
   return (
      <>
         <button disabled={_page === 1} onClick={handlePagePrev}>
            Prev
         </button>
         <button disabled={_page === totalPages} onClick={handlePageNext}>
            Next
         </button>
      </>
   );
}

export default Pagination;
