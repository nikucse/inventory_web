import React from 'react';
import DailyStatusCount from '../../components/count/DailyStatusCount';
import EmployeeTable from '../../components/table/EmployeeTable';
import ProductTable from '../../components/table/ProductTable';
import Base from '../core/Base';

const Dashboard = () => {
  return (
    <Base>
      <div className='container'>
        <div className='row'>
          <div className='col bg-white mb-5'>
            <DailyStatusCount />
            <div className='container-fluid pt-4'>
              <div className='row g-4'>
                <div className='col-md-12  bg-white'>
                  <ProductTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Dashboard;
