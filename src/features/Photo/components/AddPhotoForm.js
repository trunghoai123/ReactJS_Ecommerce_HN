import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import { CATEGORY_OPTIONS } from 'constants/index';
import { Formik, Form, Field, ErrorMessage, FastField } from 'formik';
import InputField from 'components/Formik/InputField';
import SelectField from 'components/Formik/SelectField';
import PhotoField from 'components/Formik/PhotoField';
import * as Yup from 'yup';
const userSchema = Yup.object().shape({
   title: Yup.string().required('Please enter title'),
   category: Yup.number().required('Plese select category').nullable(),
   image: Yup.string().when('category', {
      is: 1,
      then: Yup.string().required('Please click random image button'),
      otherwise: Yup.string().notRequired(),
   }),

   // image: Yup.string().required('Please click random image button'),
});
const AddPhotoForm = ({ onSubmit = () => {}, initialValues, isAddMode = false }) => {
   const initValues = initialValues || {
      id: '',
      title: '',
      category: null,
      image: '',
   };
   return (
      <Formik validationSchema={userSchema} onSubmit={onSubmit} initialValues={initValues}>
         {(formikProps) => {
            return (
               <Form>
                  <FastField
                     name='title'
                     component={InputField}
                     label='Title'
                     placeholder='Eg: Wow Nature'
                  />
                  <FastField
                     name='category'
                     component={SelectField}
                     label='Category'
                     placeholder="What's your Photo catetegory"
                     options={CATEGORY_OPTIONS}
                  />
                  <FastField name='image' component={PhotoField} label='Random Image' />
                  {/* <FormGroup>
                     <Label for='categoryId'>Category</Label>
                     <Select
                        name='category'
                        id='categoryId'
                        placeholder="what's your Photo catetegory"
                        options={CATEGORY_OPTIONS}
                     ></Select>
                  </FormGroup> */}
                  {/* <FormGroup>
                     <Label for='photoId'>Photo</Label>
                     <div>
                        <Button type='button' outline color='primary'>
                           Random photo
                        </Button>
                     </div>
                     <div>
                        <img width='200px' height='200px' src='https://rg.link/UiJhErx' alt='' />
                     </div>
                  </FormGroup> */}

                  <FormGroup>
                     <Button type='submit' color='primary'>
                        {isAddMode ? 'Add to album' : 'Update photo'}
                     </Button>
                  </FormGroup>
               </Form>
            );
         }}
      </Formik>
   );
};

AddPhotoForm.propTypes = {
   onSubmit: PropTypes.func,
   initialValues: PropTypes.object,
   isAddMode: PropTypes.bool,
};

export default AddPhotoForm;
