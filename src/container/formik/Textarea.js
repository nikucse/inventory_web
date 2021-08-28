import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from '../../components/TextError';

const Textarea = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <div className='form-control'>
        <Field as='textarea' id={name} name={name} {...rest} />
        <ErrorMessage name={name} component={TextError} />
      </div>
    </div>
  );
};

export default Textarea;
