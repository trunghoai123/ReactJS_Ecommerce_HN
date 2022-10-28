import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import Select from 'react-select';
import { ErrorMessage } from 'formik';

const SelectField = ({
   form,
   field,
   options,
   label = 'select input',
   disabled = false,
   placeholder = 'select',
}) => {
   const { name, value } = field;
   const { errors, touched } = form;
   const hasError = errors[name] && touched[name];
   const selectedOption = options.find((item) => item.value === value);
   const handleChangeOption = (selectedOption) => {
      const selectedValue = selectedOption ? selectedOption.value : selectedOption;
      const changedEvent = {
         target: {
            name: name,
            value: selectedValue,
         },
      };
      field.onChange(changedEvent);
      console.log(selectedOption);
   };
   return (
      <FormGroup>
         {label && <Label for={name}>{label}</Label>}
         <Select
            {...field}
            onChange={handleChangeOption}
            id={name}
            value={selectedOption}
            placeholder={placeholder}
            isDisabled={disabled}
            options={options}
            className={hasError && 'is-invalid'}
         ></Select>
         {/* ErrorMessage Show error when its before tag has is-invalid class */}
         <ErrorMessage name={name} component={FormFeedback}></ErrorMessage>
      </FormGroup>
   );
};
SelectField.propTypes = {
   field: PropTypes.object.isRequired,
   form: PropTypes.object.isRequired,
   options: PropTypes.array.isRequired,
   placeholder: PropTypes.string,
   label: PropTypes.string,
   disabled: PropTypes.bool,
};
export default SelectField;
