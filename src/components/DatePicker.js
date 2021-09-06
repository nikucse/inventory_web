import { ErrorMessage, Field } from 'formik';
import React from 'react';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TextError from './TextError';

const DatePicker = (props) => {
  const { label, name, ...rest } = props;

  return (
    <div className='mb-3'>
      <label htmlFor={name} className='mb-2 text-muted'>
        {label}
      </label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              className='form-control'
              id={name}
              {...field}
              {...rest}
              selected={value}
              isClearable
              placeholderText='Select Date'
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default DatePicker;
