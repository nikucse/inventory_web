import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { register } from '../../service/AuthService';
import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';
import FormikControl from '../formik/FormikControl';

import './Register.css';
import Base from '../core/Base';

const Register = () => {
  const history = useHistory();
  const [notifyData, setNotifyData] = useState({
    message: '',
    type: '',
  });

  const { message, type } = notifyData;

  const initialValues = {
    firstName: '',
    lastName: '',
    emailId: '',
    password: '',
    confirmPassword: '',
  };

  const onSubmit = (values) => {
    register(values).then((data) => {
      if (data && data.reason) {
        setNotifyData({ ...notifyData, message: data.message, type: 'error' });
      } else {
        setNotifyData({
          ...notifyData,
          message: 'User Register successfully',
          type: 'success',
        });
        history.push({
          pathname: '/app/dashboard',
          state: notifyData,
        });
      }
    });
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    emailId: Yup.string()
      .email('Invalid Email format i.e abc@xyz.com')
      .required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Passwords must match')
      .required('Required'),
  });

  const registerForm = () => {
    return (
      <div className='h-100'>
        <div className='container h-100'>
          <div className='row justify-content-sm-center h-100'>
            <div className='col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9 '>
              <div className='text-center mt-5'></div>
              <div className='card shadow-lg'>
                <div className='card-body p-5'>
                  <h2 className='fs-4 card-title fw-bold mb-4'>Add User</h2>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}>
                    {(formik) => {
                      return (
                        <Form autoComplete='off'>
                          <FormikControl
                            control='input'
                            label='First Name'
                            name='firstName'
                            autoFocus
                          />
                          <FormikControl
                            control='input'
                            label='Last Name'
                            name='lastName'
                          />
                          <FormikControl
                            control='input'
                            type='email'
                            label='E-Mail Address'
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

                          <div className='d-flex flex-row-reverse'>
                            <button
                              type='reset'
                              className='btn btn-primary mx-2'>
                              Reset
                            </button>
                            <button
                              type='submit'
                              className='btn btn-primary mx-2'>
                              Add User
                            </button>
                          </div>
                        </Form>
                      );
                    }}
                  </Formik>
                </div>
                <div className='card-footer py-3 border-0'>
                  <div className='text-center'>
                    Already have an account?{' '}
                    <a href='index.html' className='text-dark'>
                      Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Base message={message} type={type}>
      {registerForm()}
    </Base>
  );
};

export default Register;
