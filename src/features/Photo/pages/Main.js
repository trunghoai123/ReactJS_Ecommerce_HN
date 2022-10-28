import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useHistory, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'reactstrap';
import PhotoList from '../components/PhotoList';
import { removePhoto } from '../components/photoSlice';

const MainPhoto = (props) => {
   const photos = useSelector((state) => state.photo);
   const history = useHistory();
   const dispatch = useDispatch();
   console.log(photos);
   const { url } = useRouteMatch();
   const handleClickEdit = (id) => {
      console.log(id);
      history.push(`/photos/${id}`);
   };
   const handleClickRemove = (id) => {
      dispatch(removePhoto(id));
      // console.log(id);
   };
   return (
      <Container>
         Main Photo page
         <div>
            <NavLink to={`${url}/add`}>Add New Photo</NavLink>
         </div>
         <PhotoList
            onRemoveClick={handleClickRemove}
            onEditClick={handleClickEdit}
            listPhoto={photos}
         ></PhotoList>
      </Container>
   );
};

MainPhoto.propTypes = {};

export default MainPhoto;
