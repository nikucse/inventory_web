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
    <nav className='navbar navbar-expand-md bg-light navbar-light pb-2 fixed-top'>
      <div className='container-fluid ml-0 mr-0'>
        <a className='navbar-brand'>
          <FaIcons.FaBars onClick={showSidebar} />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navmenu'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse bg-light' id='navmenu'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item my-2 mx-3'>
              <button
                className='btn btn-primary'
                onClick={() => registerForm()}>
                Register
              </button>
            </li>
            <li className='nav-item my-2 mr-5'>
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
