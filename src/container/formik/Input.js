import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from '../../components/TextError';

const Input = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className='form-group'>
      <label htmlFor={name} className='form-label'>
        {label}
      </label>
      <Field className='form-control' id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
