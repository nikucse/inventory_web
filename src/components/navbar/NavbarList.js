import React from 'react';
import DailyStatusCount from '../count/DailyStatusCount';
import EmployeeTable from '../table/EmployeeTable';
import ProductTable from '../table/ProductTable';

const NavbarList = () => {
  return (
    <div>
      <div className='container-fluid pt-4'>
        <div className='row'>
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
