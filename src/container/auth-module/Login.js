import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import FormikControl from '../formik/FormikControl';
import { useHistory } from 'react-router-dom';
import { authenticate, isAuthenticated } from '../../service/AuthService';
import { login } from '../../service/PublicService';
import * as Yup from 'yup';

import './Login.css';

const Login = () => {
  const history = useHistory();
  const initialValues = {
    emailId: '',
    password: '',
    //emailId: 'nikul@gmail.com',
    //password: 'Nikul@123',
    // emailId: "ajit@gmail.com",
    // password: "Ajit@123",
  };

  const loginValidationSchema = Yup.object({
    emailId: Yup.string().email('Invalid Email format').required('Required'),
    password: Yup.string().required('Required'),
  });

  const [errors, setErrors] = useState({
    error: '',
    loading: false,
    didRedirect: false,
  });

  const { error, loading, didRedirect } = errors;
  const { user } = isAuthenticated();

  const onSubmit = (values) => {
    login(values).then((data) => {
      if (data === undefined) {
        setErrors({
          ...errors,
          error: 'Please Check Server Try After Sometime',
          loading: false,
        });
      } else if (data.reason) {
        setErrors({ ...errors, error: data.message, loading: false });
      } else {
        authenticate(data, () => {
          setErrors({
            ...errors,
            didRedirect: true,
          });
        });
      }
    });
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 'ROLE_ADMIN') {
        history.push('/app/dashboard');
      } else {
        history.push('/app/dashboard');
      }
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className='alert alert-info'>
          <h2>Loading...</h2>
        </div>
      )
    );
  };

  const errorMessage = () => {
    return (
      <div className='row'>
        <div className='col-md-6 offset-sm-3 text-left'>
          <div
            className='alert alert-danger'
            style={{ display: error ? '' : 'none' }}>
            {error}
          </div>
        </div>
      </div>
    );
  };

  const logInForm = () => {
    return (
      <div className='row justify-content-center p-5'>
        <div className='col-md-4'>
          <h2 className='p-3'>Sign in</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={loginValidationSchema}
            onSubmit={onSubmit}>
            {(formik) => {
              return (
                <Form>
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
                  <button
                    type='submit'
                    className='btn btn-primary btn-md btn-block rounded col'
                    disabled={!formik.isValid}>
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

  return (
    <div className='p-5 h-100 bg-dark text-light Login'>
      <div className='container login-in'>
        {loadingMessage()}
        {errorMessage()}
        {logInForm()}
        {performRedirect()}
      </div>
    </div>
  );
};

export default Login;
