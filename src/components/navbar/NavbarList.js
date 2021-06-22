import React from "react";
import DailyStatusCount from "../count/DailyStatusCount";
import EmployeeTable from "../table/EmployeeTable";
import ProductTable from "../table/ProductTable";
import "./NavbarList.css";

const NavbarList = () => {
  return (
    <div>
      <div className='container-fluid pt-4 text-dark '>
        <div className='row'>
          {/* <div className='col-md-2 br-5 NavbarList'>
            <ul className='navbar-nav'>
              <li className='nav-item pt-4'>
                <p className='lead'>
                  <i className='fas fa-store-alt h2 text-primary'></i>
                  Dashboard
                </p>
              </li>
              <li className='nav-item '>
                <p className='lead'>
                  <i className='fas fa-clipboard-list h2 text-primary'></i>
                  Products
                </p>
              </li>
              <li className='nav-item'>
                <p className='lead'>
                  <i className='fas fa-toolbox h2 text-primary'></i>
                  Materials
                </p>
              </li>
              <li className='nav-item'>
                <p className='lead'>
                  <i className='fas fa-users h2 text-primary'></i>
                  Employees
                </p>
              </li>
              <li className='nav-item'>
                <p className='lead'>
                  <i className='fas fa-user-friends h2 text-primary'></i>
                  Customers
                </p>
              </li>
              <li className='nav-item'>
                <p className='lead'>
                  <i className='fas fa-address-book h2 text-primary'></i>
                  Bill Detail
                </p>
              </li>
              <li className='nav-item'>
                <p className='lead'>
                  <i className='fas fa-truck  h2 text-primary'></i>
                  Order Detail
                </p>
              </li>
              <li className='nav-item'>
                <p className='lead'>
                  <i className='fas fa-address-book  h2 text-primary'></i>
                  Attendance
                </p>
              </li>
              <li className='nav-item'>
                <p className='lead'>
                  <i className='fas fa-rupee-sign h2 text-primary'></i>
                  Daily Expense
                </p>
              </li>
            </ul>
          </div> */}
          <div className='col bg-white mb-5'>
            <DailyStatusCount />
            <div className='container-fluid pt-4'>
              <div className='row g-4'>
                <div className='col-md-7  bg-info'>
                  <ProductTable />
                </div>
                <div className='col-md-4 offset-md-1 bg-danger'>
                  <EmployeeTable />
                </div>
                <div className='col-md-6 md-5 bg-primary'>
                  <EmployeeTable />
                </div>
                <div className='col-md-5  md-5 offset-md-1 bg-primary'>
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
