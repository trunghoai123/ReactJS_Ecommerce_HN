import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ onSubmit }) => {
   const [filterValue, setFiltervalue] = useState('');
   const filterRef = useRef(null);
   const handleChangeValue = (e) => {
      // if meet a problem => solution: clone e.target.value
      setFiltervalue(e.target.value);
      if (!onSubmit) return;
      if (filterRef.current) {
         clearTimeout(filterRef.current);
      }

      filterRef.current = setTimeout(() => {
         const formValues = {
            searchValue: e.target.value,
         };
         onSubmit(formValues);
      }, 500);
   };
   return (
      <form>
         <input value={filterValue} onChange={handleChangeValue} />
      </form>
   );
};

Search.propTypes = {
   onSubmit: PropTypes.func,
};
Search.defaultProps = {
   onSubmit: () => {},
};

export default Search;
