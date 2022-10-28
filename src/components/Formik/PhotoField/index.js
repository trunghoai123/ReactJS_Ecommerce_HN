import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import RandomPhoto from './RandomPhoto';
import { ErrorMessage } from 'formik';

const PhotoField = ({ field, form, label }) => {
   const { name, value, onBlur } = field;
   const { errors, touched } = form;
   const hasError = errors[name] && touched[name];
   const handleImageChange = (newImageUrl) => {
      form.setFieldValue(name, newImageUrl);
      console.log(newImageUrl);
   };
   return (
      <FormGroup>
         {label && <Label for={name}>{label}</Label>}
         <RandomPhoto
            name={name}
            imageUrl={value}
            onImageUrlChange={handleImageChange}
            onButtonBlur={onBlur}
         ></RandomPhoto>
         <div className={hasError && 'is-invalid'}></div>
         {/* ErrorMessage Show error when its before tag has is-invalid class */}
         <ErrorMessage name={name} component={FormFeedback}></ErrorMessage>
      </FormGroup>
   );
};

PhotoField.propTypes = {};

export default PhotoField;
