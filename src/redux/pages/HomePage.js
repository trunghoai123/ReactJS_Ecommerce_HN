import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import HobbyList from '../components/Home/HobbyList';
import { addHobby, setActiveHobby } from '../actions/Hobby';
// import casual from 'casual';

const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'y', 'h'];

const HomePage = (props) => {
   const { list } = useSelector((state) => state.hobby);
   const { selectedId } = useSelector((state) => state.hobby);
   const dispatch = useDispatch();
   const handleRandHobby = () => {
      const newHobby = {
         id:
            Math.ceil(Math.random() * 10000) +
            Math.ceil(Math.random() * 1000) +
            Math.ceil(Math.random() * 100) +
            Math.ceil(Math.random() * 10) +
            Math.ceil(Math.random() * 1),
         title: arr[Math.trunc(Math.random() * arr.length)] + arr[Math.trunc(Math.random() * arr.length)],
      };
      const addAcs = addHobby(newHobby);
      dispatch(addAcs);
   };
   const handleClickItem = (hobby) => {
      dispatch(setActiveHobby(hobby));
   };
   return (
      <div>
         Home page ne
         <button onClick={handleRandHobby}>rand hobby</button>
         <HobbyList activeId={selectedId} onClickItem={handleClickItem} listHobby={list}></HobbyList>
      </div>
   );
};

HomePage.propTypes = {};

export default HomePage;
