import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  authenticate,
  login,
  isAuthenticated,
} from '../../service/AuthService';

import './Login.css';

const Login = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    //email: 'nikul@gmail.com',
    //password: 'Nikul@123',
    // email: "ajit@gmail.com",
    // password: "Ajit@123",
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    error: '',
    loading: false,
    didRedirect: false,
  });

  const {
    email,
    password,
    error,
    loading,
    didRedirect,
    emailError,
    passwordError,
  } = values;
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const isValid = validate();
    if (isValid) {
      login({ emailId: email, password }).then((data) => {
        if (data.reason) {
          setValues({ ...values, error: data.message, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });
          });
        }
      });
    }
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 'ROLE_ADMIN') {
        history.push('/app/dashboard');
      } else {
        history.push('/app/dashboard');
      }
    }
    if (isAuthenticated()) {
      history.push('/app/dashboard');
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

  const validate = () => {
    let emailErrorMessage = '';
    let passwordErrorMessage = '';

    if (email) {
      if (!email.includes('@')) emailErrorMessage = 'Invalid Email id';
    } else emailErrorMessage = 'Please Enter Email-Id';
    if (!password) passwordErrorMessage = 'Please Enter Password';

    if (emailErrorMessage || passwordErrorMessage) {
      setValues({
        ...values,
        emailError: emailErrorMessage,
        passwordError: passwordErrorMessage,
      });
      return false;
    }
    return true;
  };

  const logInForm = () => {
    return (
      <div className='row justify-content-center'>
        <div className='col-md-4'>
          <h1 className='pb-4'>Sign in</h1>
          <form>
            <div className='form-group'>
              <div className='text-danger'>{emailError}</div>
              <label>Email Address</label>
              <input
                onChange={handleChange('email')}
                value={email}
                className='form-control'
                type='email'
                autoFocus
              />
            </div>
            <div className='text-danger'>{passwordError}</div>
            <div className='form-group'>
              <label>Password</label>
              <input
                onChange={handleChange('password')}
                value={password}
                className='form-control'
                type='password'
              />
            </div>
            <button
              onClick={onSubmit}
              className='btn btn-primary btn-lg btn-center btn-block rounded'>
              Submit
            </button>
          </form>
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
