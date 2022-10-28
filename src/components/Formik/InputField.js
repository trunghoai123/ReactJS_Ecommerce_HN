import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { ErrorMessage } from 'formik';
const InputField = ({
   field,
   form,
   label = 'Empty Label',
   placeholder = 'Type Here',
   disabled = false,
   type = 'text',
}) => {
   //field prop contains name, value, onChange, onBlur.
   const { name } = field; // name will recieved by field prop
   const { errors, touched } = form;
   const hasError = errors[name] && touched[name];
   return (
      <FormGroup>
         {label && <Label for={name}>{label}</Label>}
         <Input
            {...field}
            name={name}
            id={name}
            placeholder={placeholder}
            disabled={disabled}
            type={type}
            invalid={hasError}
         ></Input>
         {/* ErrorMessage Show error when its before tag has is-invalid class */}
         <ErrorMessage name={name} component={FormFeedback}></ErrorMessage>
      </FormGroup>
   );
};

InputField.propTypes = {
   field: PropTypes.object,
   form: PropTypes.object,
   label: PropTypes.string,
   placeholder: PropTypes.string,
   disabled: PropTypes.bool,
   type: PropTypes.string,
};

export default InputField;
