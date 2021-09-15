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
        <div className='col-md-6 offset-sm-3 text-left pt-5'>
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
      <div className='h-100'>
        <div className='container h-100'>
          <div className='row justify-content-sm-center h-100'>
            <div className='col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9'>
              <div className='text-center my-2'>
                <img
                  src='https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg'
                  alt='logo'
                  width='100'
                />
              </div>
              <div className='card shadow-lg'>
                <div className='card-body p-5'>
                  <h1 className='fs-4 card-title fw-bold mb-4'>Login</h1>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={loginValidationSchema}
                    onSubmit={onSubmit}>
                    {(formik) => {
                      return (
                        <Form autoComplete='off'>
                          <FormikControl
                            control='input'
                            type='email'
                            label='E-Mail Address'
                            name='emailId'
                            autoFocus
                          />

                          <a
                            href='forgot.html'
                            className='d-grid d-md-flex justify-content-end'>
                            Forgot Password?
                          </a>
                          <FormikControl
                            control='input'
                            type='password'
                            label='Password'
                            name='password'
                          />

                          <div className='d-flex flex-row-reverse'>
                            <button type='submit' className='btn btn-primary'>
                              Login
                            </button>
                          </div>
                        </Form>
                      );
                    }}
                  </Formik>
                </div>
                <div className='card-footer py-3 border-0'>
                  <div className='text-center'>
                    Don't have an account?{' '}
                    <a href='register.html' class='text-dark'>
                      Create One
                    </a>
                  </div>
                </div>
              </div>
              <div className='text-center mt-5 text-muted'>
                Copyright &copy; 2020 &mdash; Technuzone
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {loadingMessage()}
      {errorMessage()}
      {logInForm()}
      {performRedirect()}
    </div>
  );
};

export default Login;
