import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './counterSlice';

const Counter = () => {
   const count = useSelector((state) => state.count);
   const dispatch = useDispatch();
   const handleIncrease = () => {
      dispatch(increment(1));
   };
   const handleDecrease = () => {
      dispatch(decrement(1));
   };
   return (
      <div>
         <h3>{count}</h3>
         <button onClick={handleIncrease}>Increase</button>
         <button onClick={handleDecrease}>Decrease</button>
      </div>
   );
};

Counter.propTypes = {};

export default Counter;
