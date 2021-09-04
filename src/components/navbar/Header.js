import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { logoutUser } from '../../service/AuthService';

const Header = ({ showSidebar }) => {
  const history = useHistory();

  const logout = () => {
    logoutUser();
    history.push('/');
  };

  const registerForm = () => {
    history.push('/app/register');
  };

  return (
    <nav className='navbar navbar-expand-md bg-dark navbar-dark pb-2 fixed-top'>
      <div className='container-fluid ml-0 mr-0'>
        <a className='navbar-brand'>
          {/* LOGO */}
          <FaIcons.FaBars onClick={showSidebar} />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navmenu'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse bg-dark' id='navmenu'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <div className='input-group my-2 mr-3'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Search...'
                />
                <button
                  className='btn btn-primary'
                  type='button'
                  id='button-addon2'>
                  <FaIcons.FaSearch />
                </button>
              </div>
            </li>
            <li className='nav-item my-2 mx-3'>
              <button
                className='btn btn-primary'
                onClick={() => registerForm()}>
                Register
              </button>
            </li>
            <li className='nav-item my-2'>
              <button className='btn btn-primary' onClick={() => logout()}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
