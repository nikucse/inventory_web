import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from '../../components/TextError';

const Select = (props) => {
  const { label, name, options, ...rest } = props;

  return (
    <div>
      <label htmlFor='name' className='form-label'>
        {label}
      </label>
      <Field
        className='form-control'
        as='select'
        id={name}
        name={name}
        {...rest}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
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
