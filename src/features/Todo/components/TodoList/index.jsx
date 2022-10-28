import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
// import InputField from '../../../../components/Input/InputField';

TodoList.propTypes = {
   todoList: PropTypes.array,
   onChangeItem: PropTypes.func,
};
TodoList.defaultProps = {
   todoList: [],
   onChangeItem: null,
};
function TodoList({ todoList, onChangeItem }) {
   const handleChangeItem = (item, index) => {
      if (!onChangeItem) return null;
      onChangeItem(item, index);
   };
   return (
      <>
         <ul className='todo-list'>
            {todoList.map((item, index) => {
               return (
                  <li
                     key={item.id}
                     className={item.status === 'completed' ? 'completed' : 'pending'}
                     onClick={() => handleChangeItem(item, index)}
                  >
                     {item.name}
                  </li>
               );
            })}
         </ul>
      </>
   );
}

export default TodoList;
