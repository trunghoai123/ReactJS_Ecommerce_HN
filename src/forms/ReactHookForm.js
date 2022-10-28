import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../components/Input/InputField';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
const ReactHookForm = ({ onSubmit }) => {
   const schema = yup
      .object()
      .shape({
         title: yup.string().required('please enter title').min(5, 'title too short'),
      })
      .required();
   const form = useForm({
      defaultValues: {
         title: '',
      },
      mode: 'onChange',
      resolver: yupResolver(schema),
   });
   const handleSubmit = (values) => {
      console.log(values);
   };
   return (
      <form autoComplete='off' onSubmit={form.handleSubmit(handleSubmit)}>
         <h2>Form</h2>
         <InputField name='title' disabled={false} label='title' form={form}></InputField>
      </form>
   );
};

ReactHookForm.propTypes = {
   onSubmit: PropTypes.func,
};

export default ReactHookForm;
