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

  const registerValidationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    emailId: Yup.string().email('Invalid Email format').required('Required'),
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
            <div class='col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9'>
              <div class='text-center mt-5'></div>
              <div className='card shadow-lg'>
                <div className='card-body p-5'>
                  <h1 className='fs-4 card-title fw-bold mb-4'>Add User</h1>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={registerValidationSchema}
                    onSubmit={onSubmit}>
                    {(formik) => {
                      return (
                        <Form autoComplete='off'>
                          <FormikControl
                            control='input'
                            type='text'
                            label='First Name'
                            name='firstName'
                            autofocus
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
                            <button type='submit' className='btn btn-primary'>
                              Add User
                            </button>
                          </div>
                        </Form>
                      );
                    }}
                  </Formik>
                </div>
                <div class='card-footer py-3 border-0'>
                  <div class='text-center'>
                    Already have an account?{' '}
                    <a href='index.html' class='text-dark'>
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

  return <div>{registerForm()}</div>;
};

export default Register;
