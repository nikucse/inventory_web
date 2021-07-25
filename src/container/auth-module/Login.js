import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { authenticate, login, isAuthenticated } from "../../service/auth";

import "./Login.css";

const Login = () => {
  const [values, setValues] = useState({
    email: "ajit@gmail.com",
    password: "Ajit@123",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });

    login({ emailId: email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });
          });
        }
      })
      .catch(console.log("Login request failed"));
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === "ROLE_ADMIN") {
        return <Redirect to='/app/dashboard' />;
      } else {
        return <Redirect to='/app/dashboard' />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to='/' />;
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
            style={{ display: error ? "" : "none" }}>
            {error}
          </div>
        </div>
      </div>
    );
  };

  const logInForm = () => {
    return (
      <div className='row justify-content-center'>
        <div className='col-md-4'>
          <h1 className='pb-4'>Sign in</h1>
          <form>
            <div className='form-group'>
              <label>Email Address</label>
              <input
                onChange={handleChange("email")}
                value={email}
                className='form-control'
                type='email'
                autoFocus
              />
            </div>
            <br />
            <div className='form-group'>
              <label>Password</label>
              <input
                onChange={handleChange("password")}
                value={password}
                className='form-control'
                type='password'
              />
            </div>
            <br />
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
