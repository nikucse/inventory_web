import React from "react";

const DailyStatusCount = () => {
  return (
    <div>
      <h2></h2>
      <div className='container pt-2'>
        <div className='row text-center g-4'>
          <div className='col-md'>
            <div className='card bg-dark text-light'>
              <div className='card-body text-center'>
                <div className='h1 mb-3'>
                  <i className='bi bi-laptop'></i>
                </div>
                <h3 className='card-title mb-3'>Daily Expense</h3>
                <p className='card-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsam, error.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md'>
            <div className='card bg-info text-light'>
              <div className='card-body text-center'>
                <div className='h1 mb-3'>
                  <i className='bi bi-person-square'></i>
                </div>
                <h3 className='card-title mb-3'>Order Pending</h3>
                <p className='card-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsam, error.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md'>
            <div className='card bg-success text-light'>
              <div className='card-body text-center'>
                <div className='h1 mb-3'>
                  <i className='bi bi-people'></i>
                </div>
                <h3 className='card-title mb-3'>Bill Count</h3>
                <p className='card-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsam, error.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md'>
            <div className='card bg-danger text-light'>
              <div className='card-body text-center'>
                <div className='h1 mb-3'>
                  <i className='bi bi-people'></i>
                </div>
                <h3 className='card-title mb-3'>Order given</h3>
                <p className='card-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsam, error.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyStatusCount;
