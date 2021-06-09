import React, { useState } from "react";
import { login, authenticate, isAuthenticated } from "../auth/auth";

import "./Login.css";

const Login = () => {
  const [values, setValues] = useState({});

  const { emailId, password, error, loading, didRedirect } = values;
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });

    console.log(emailId, password);

    login({ emailId, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          console.log(data);

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

  return (
    <div className='Login'>
      <form>
        <h3>Sign In</h3>

        <div className='form-group'>
          <label>Email address</label>
          <input
            type='email'
            onChange={handleChange("email")}
            value={emailId}
            className='form-control'
            placeholder='Enter email'
          />
        </div>

        <div className='form-group'>
          <label>Password</label>
          <input
            onChange={handleChange("password")}
            value={password}
            type='password'
            className='form-control'
            placeholder='Enter password'
          />
        </div>

        <div className='form-group'>
          <div className='custom-control custom-checkbox'>
            <input
              type='checkbox'
              className='custom-control-input'
              id='customCheck1'
            />
            <label className='custom-control-label' htmlFor='customCheck1'>
              Remember me
            </label>
          </div>
        </div>

        <button
          onClick={onSubmit}
          type='submit'
          className='btn btn-primary btn-block'>
          Submit
        </button>
        <p className='forgot-password text-right'>
          Forgot <a href='#'>password?</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
