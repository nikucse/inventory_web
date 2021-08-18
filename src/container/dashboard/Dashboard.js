import React from "react";
import DailyStatusCount from "../../components/count/DailyStatusCount";
import EmployeeTable from "../../components/table/EmployeeTable";
import ProductTable from "../../components/table/ProductTable";

const Dashboard = () => (
  <div className='container-fluid pt-4 text-dark '>
    <div className='row'>
      <div className='col bg-white mb-5'>
        <DailyStatusCount />
        <div className='container-fluid pt-4'>
          <div className='row'>
            <div className='col-md-6'>
              <button className='btn btn-success'>Not Completed Product</button>
              <ProductTable />
            </div>
            <div className='col-md-6'>
              <button className='btn btn-success'>Not Started Product</button>
              <ProductTable />
            </div>
            <div className='col-md-6 md-5'>
              <EmployeeTable />
            </div>
            <div className='col-md-5  md-5 offset-md-1'>
              <EmployeeTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
