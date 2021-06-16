import React from "react";
import SideNavbar from "./SideNavbar";

const Navbar = () => {
  return (
    <div>
      <SideNavbar />
      <nav className='navbar navbar-expand-md bg-dark navbar-dark py-2 fixed-top'>
        <div className='container'>
          <a href='#' className='navbar-brand'>
            LOGO
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navmenu'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navmenu'>
            <ul className='navbar-nav ms-auto'>
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
                    <i className='fas fa-search'></i>
                  </button>
                </div>
              </li>
              <li className='nav-item my-2 mx-3'>
                <button href='#questions ' className='btn btn-primary'>
                  Register
                </button>
              </li>
              <li className='nav-item my-2'>
                <button href='#questions ' className='btn btn-primary'>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
