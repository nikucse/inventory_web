import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from '../../components/TextError';

const Select = (props) => {
  const { label, name, options, ...rest } = props;

  return (
    <div className='mb-3'>
      <label htmlFor='name' className='mb-2 text-muted'>
        {label}
      </label>
      <Field
        className='form-control'
        as='select'
        id={name}
        name={name}
        {...rest}>
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
