import React from 'react';

const DailyStatusCount = () => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

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
                  <span>
                    {today.toDateString().substr(4)} :<span> ₹ 6000</span>
                  </span>
                  <br />
                  <span>
                    {yesterday.toDateString().substr(4)} :<span> ₹ 5000</span>
                  </span>
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
                <h3 className='card-title mb-3'>Orders</h3>
                <p className='card-text'>
                  <span>
                    Pending :<span> 6</span>
                  </span>
                  <br />
                  <span>
                    Completed :<span> 50</span>
                  </span>
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
                  <span>
                    Pending Credit Bill :<span> 6</span>
                  </span>
                  <br />
                  <span>
                    pending Debit Bill :<span> 2</span>
                  </span>
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
                  <span>
                    New Order Count :<span> 15</span>
                  </span>
                  <br />
                  <span>
                    Order Cancel :<span> 2</span>
                  </span>
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
