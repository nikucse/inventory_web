import React from "react";
import { Link } from "react-router-dom";

import "./SideNavbar.css";

const SideNavbar = () => {
  return (
    <div className='text-light h-100 fixed SideNavbar'>
      <div className='container d-flex'>
        <ul className='navbar-nav mx-auto justify-content-center'>
          <li className='py-5'></li>
          <li className='nav-item pb-3'>
            <p>ProductList</p>
          </li>
          <li className='nav-item pb-3'>
            <p>MaterialList</p>
          </li>
          <li className='nav-item pb-3'>
            <p>Employee Details</p>
          </li>
          <li className='nav-item pb-3'>
            <p>Orders</p>
          </li>
          <li className='nav-item pb-3'>
            <p>Attendance</p>
          </li>
          <li className='nav-item pb-3'>
            <p>Daily Expense</p>
          </li>
          <li className='nav-item pb-3'>
            <p>About-us</p>
          </li>
          <li className='nav-item pb-3'>
            <p>Contact-us</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
