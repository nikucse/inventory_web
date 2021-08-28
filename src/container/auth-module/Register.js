import { Form, Formik } from 'formik';
import React from 'react';
import { register } from '../../service/AuthService';
import * as Yup from 'yup';

import { useHistory } from 'react-router';
import FormikControl from '../formik/FormikControl';

import './Register.css';

const Register = () => {
  const history = useHistory();

  const initialValues = {
    firstName: '',
    lastName: '',
    emailId: '',
    password: '',
    confirmPassword: '',
  };

  const onSubmit = (values) => {
    console.log('Form data ', values);
    register(values).then((data) => {
      if (data.reason) {
        alert(data.message);
        console.log('Data =====> ', data); // need to show error message
      } else {
        history.push('/app/dashboard');
      }
    });
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    emailId: Yup.string().email('Invalid Email format').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Passwords must match')
      .required('Required'),
  });

  return (
    <div className='row justify-content-center p-5'>
      <div className='col-md-4'>
        <h2 className='p-3'>Register User</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          {(formik) => {
            return (
              <Form>
                <FormikControl
                  control='input'
                  type='text'
                  label='First Name'
                  name='firstName'
                />
                <FormikControl
                  control='input'
                  type='text'
                  label='Last Name'
                  name='lastName'
                />
                <FormikControl
                  control='input'
                  type='email'
                  label='Email'
                  name='emailId'
                />
                <FormikControl
                  control='input'
                  type='password'
                  label='Password'
                  name='password'
                />
                <FormikControl
                  control='input'
                  type='password'
                  label='Confirm Password'
                  name='confirmPassword'
                />

                <button
                  type='submit'
                  className='btn btn-primary btn-md btn-block rounded col-md-4'
                  disabled={formik.isValid}>
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
