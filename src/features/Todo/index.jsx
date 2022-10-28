import React, { useState } from 'react';
import TodoList from './components/TodoList';

const list = [
   {
      id: 1,
      name: 'ReactJS',
      status: 'pending',
   },
   {
      id: 2,
      name: 'AngularJS',
      status: 'completed',
   },
   {
      id: 3,
      name: 'VueJS',
      status: 'pending',
   },
];
function Todo() {
   const [todoList, setTodoList] = useState(list);
   const [filter, setFilter] = useState('all');
   const handleChangeItem = (item, index) => {
      const newList = [...todoList];
      const newItem = {
         ...item,
         status: item.status === 'completed' ? 'pending' : 'completed',
      };
      newList[index] = newItem;
      setTodoList(newList);
   };

   const filterdTodoList = todoList.filter(
      (item) => filter === 'all' || item.status === filter
   );

   return (
      <>
         <TodoList
            todoList={filterdTodoList}
            onChangeItem={handleChangeItem}
         ></TodoList>
         <button onClick={() => setFilter('all')}>show all</button>
         <button onClick={() => setFilter('completed')}>show completed</button>
         <button onClick={() => setFilter('pending')}>show pending</button>
      </>
   );
}

export default Todo;
