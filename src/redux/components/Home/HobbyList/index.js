import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const HobbyList = ({ listHobby, onClickItem, activeId }) => {
   return (
      <div className='list_container'>
         {listHobby.map((hobby, index) => {
            return (
               <div
                  className={`item ${activeId === hobby.id ? 'active' : ''}`}
                  onClick={() => onClickItem(hobby)}
                  key={index}
               >
                  {hobby.title}
               </div>
            );
         })}
      </div>
   );
};

HobbyList.propTypes = {
   listHobby: PropTypes.array,
   onClickItem: PropTypes.func,
   activeId: PropTypes.number,
};
HobbyList.defaultProps = {
   listHobby: [],
   onClickItem: null,
   activeId: null,
};

export default HobbyList;
