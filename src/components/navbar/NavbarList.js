import React from "react";
import DailyStatusCount from "../count/DailyStatusCount";
import EmployeeTable from "../table/EmployeeTable";
import "./NavbarList.css";

const NavbarList = () => {
  return (
    <div>
      <div className='container-fluid pt-4 text-dark '>
        <div className='row'>
          <div className='col-md-2 br-5 NavbarList'>
            <ul className='navbar-nav'>
              <li className='nav-item pt-4'>
                <p className='lead'>
                  <i className='fas fa-store-alt h2 text-success'></i>
                  Dashboard
                </p>
              </li>
              <li className='nav-item '>
                <p className='lead'>
                  <i className='fas fa-clipboard-list h2 text-success'></i>
                  Product Details
                </p>
              </li>
              <li className='nav-item'>
                <p className='lead'>
                  <i class='fas fa-toolbox h2 text-success'></i>Material Details
                </p>
              </li>
              <li className='nav-item'>
                <p className='lead'>
                  <i class='fas fa-users h2 text-success'></i>Employee Details
                </p>
              </li>
              <li className='nav-item'>
                <p className='lead'>
                  <i class='fas fa-user-friends h2 text-success'></i>Customer
                  Details
                </p>
              </li>
              <li className='nav-item'>
                <p className='lead'>
                  <i class='fas fa-address-book h2 text-success'></i>Bill
                  Details
                </p>
              </li>
              <li className='nav-item'>
                <p className='lead'>
                  <i class='fas fa-truck  h2 text-success'></i>Order Details
                </p>
              </li>
              <li className='nav-item'>
                <p className='lead'>
                  <i class='fas fa-address-book  h2 text-success'></i>Attendance
                  Details
                </p>
              </li>
              <li className='nav-item'>
                <p className='lead'>
                  <i class='fas fa-rupee-sign h2 text-success'></i>Daily Expense
                </p>
              </li>
            </ul>
          </div>
          <div className='col bg-white mb-5'>
            <DailyStatusCount />
            <div className='container pt-4'>
              <div className='row g-4'>
                <div className='col-md-5  bg-info'>
                  <EmployeeTable />
                </div>
                <div className='col-md-5 offset-md-1 bg-danger'>
                  <EmployeeTable />
                </div>
                <div className='col-md-5 md-5 bg-primary'>
                  <EmployeeTable />
                </div>
                <div className='col-md-5  md-5 offset-md-1 bg-success'>
                  <EmployeeTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarList;
