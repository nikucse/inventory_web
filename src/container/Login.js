import React from "react";

import "./Login.css";

const Login = () => {
  return (
    <div className='container Login'>
      <div className='row'>
        <div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
          <div className='card card-signin my-5'>
            <div className='card-body'>
              <h5 className='card-title text-center strong'>Sign In</h5>
              <form className='form-signin'>
                <div className='form-label-group'>
                  <input
                    type='email'
                    id='email'
                    className='form-control inputField'
                    placeholder='Enter Email address'
                    required
                    autoFocus
                  />
                  <label htmlFor='email'>Email address</label>
                </div>
                <div className='form-label-group'>
                  <input
                    type='password'
                    id='password'
                    className='form-control inputField'
                    placeholder='Enter Password'
                    required
                  />
                  <label htmlFor='password'>Enter Password</label>
                </div>
                <div className='custom-control cutom-checkbo mb-3'>
                  <input
                    type='checkbox'
                    className='custom-control-input'
                    id='customCheck1'
                  />
                  <label
                    className='custom-control-label'
                    htmlFor='customCheck1'>
                    Remember password
                  </label>
                </div>
                <button
                  className='btn btn-lg btn-primary btn-block text-uppercase'
                  type='submit'>
                  Sign in
                </button>
                <hr className='my-4' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
