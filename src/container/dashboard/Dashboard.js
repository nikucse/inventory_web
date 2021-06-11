import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className=''>
        <h1>Dashboard</h1>
        {/* <CommonTable /> */}
        <div class='btn-group' role='group' aria-label='Basic example'>
          <button type='button' class='btn btn-primary'>
            Left
          </button>
          <button type='button' class='btn btn-primary'>
            Middle
          </button>
          <button type='button' class='btn btn-primary'>
            Right
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
