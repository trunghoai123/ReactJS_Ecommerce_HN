import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import AddPhotoForm from '../components/AddPhotoForm';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto, updatePhoto } from '../components/photoSlice';
import { useHistory, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
const AddPhoto = (props) => {
   const history = useHistory();
   const dispatch = useDispatch();
   const { photoId } = useParams();
   const photo = useSelector((state) => state.photo.find((photo) => photo.id === photoId));
   const isAddMode = !photo;
   console.log(photo);
   const handleSubmit = (values) => {
      if (isAddMode) {
         dispatch(addPhoto({ ...values, id: uuidv4() }));
         history.push('/photos');
      } else {
         dispatch(updatePhoto(values));
         history.push('/photos');
      }
   };
   return (
      <Container>
         Add Photo Page
         <AddPhotoForm
            isAddMode={isAddMode}
            initialValues={photo}
            onSubmit={handleSubmit}
         ></AddPhotoForm>
      </Container>
   );
};

AddPhoto.propTypes = {};

export default AddPhoto;
