import React, { useState, useEffect } from 'react';
import { getlatestExpense } from '../../service/ExpenseService';
import { getPendingOrCompletedOrders } from '../../service/OrderService';
import { getPendingBillCount } from '../../service/BillService';

const DailyStatusCount = () => {
  const [expenses, setExpenses] = useState([]);
  const [orders, setOrders] = useState([]);
  const [billCount, setBillCounts] = useState([]);

  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const loadLastTwoDayExpense = () => {
    getlatestExpense().then((data) => {
      setExpenses(data);
    });
  };

  const getOrderCount = () => {
    getPendingOrCompletedOrders().then((data) => {
      setOrders(data);
    });
  };

  const getBillCount = () => {
    getPendingBillCount().then((data) => {
      setBillCounts(data);
      console.log(data);
    });
  };

  useEffect(() => {
    loadLastTwoDayExpense();
    getOrderCount();
    getBillCount();
  }, []);

  return (
    <div>
      <div className='container pt-2'>
        <div className='row text-center p-2'>
          <div className='col-md'>
            <div className='card bg-light text-dark'>
              <div className='card-body text-center'>
                <h3 className='card-title mt-3 p-2'>Expense</h3>
                <p className='card-text'>
                  <span>
                    {today.toDateString().substr(4)} :
                    <span>
                      {' '}
                      ₹{' '}
                      {expenses === undefined
                        ? 0
                        : expenses[0] === undefined
                        ? 0
                        : expenses[0]}
                    </span>
                  </span>
                  <br />
                  <span>
                    {yesterday.toDateString().substr(4)} :
                    <span>
                      {' '}
                      ₹{' '}
                      {expenses === undefined
                        ? 0
                        : expenses[1] === undefined
                        ? 0
                        : expenses[1]}
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className='col-md p-2'>
            <div className='card card bg-light text-dark'>
              <div className='card-body text-center'>
                <div className='h1 mb-3'>
                  <i className='bi bi-person-square'></i>
                </div>
                <h3 className='card-title mb-3'>Orders</h3>
                <p className='card-text'>
                  <span>
                    Pending :
                    <span> {orders === undefined ? 0 : orders[0]}</span>
                  </span>
                  <br />
                  <span>
                    Completed :
                    <span> {orders === undefined ? 0 : orders[1]}</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className='col-md p-2'>
            <div className='card bg-light text-dark'>
              <div className='card-body text-center'>
                <div className='h1 mb-3'>
                  <i className='bi bi-people'></i>
                </div>
                <h3 className='card-title mb-3'>Pending Bill</h3>
                <p className='card-text'>
                  <span>
                    Credit Bill :<span> {billCount && billCount[0]}</span>
                  </span>
                  <br />
                  <span>
                    Debit Bill :<span> {billCount && billCount[1]}</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className='col-md p-2'>
            <div className='card bg-light text-dark'>
              <div className='card-body text-center'>
                <div className='h1 mb-3'>
                  <i className='bi bi-people'></i>
                </div>
                <h3 className='card-title mb-3'>Order given</h3>
                <p className='card-text'>
                  <span>
                    New Order :<span> 15</span>
                  </span>
                  <br />
                  <span>
                    Cancel Order:<span> 2</span>
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
