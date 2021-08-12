import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addExpense, updateExpense } from '../../service/ExpenseService';
import moment from 'moment';

const AddExpense = () => {
  const history = useHistory();
  const [selectedDate, setSelectedDate] = useState('');
  const [values, setValues] = useState({
    purpose: '',
    category: '',
    amount: '',
    paymentStatus: '',
    message: '',
    isEdit: false,
    error,
    loading,
    didRedirect,
  });

  const {
    purpose,
    category,
    amount,
    paymentStatus,
    message,
    error,
    loading,
    didRedirect,
    isEdit,
  } = values;

  useEffect(() => {
    console.log('Add Expense ==> ', history.location.state);
    if (history.location.state && history.location.state.purpose) {
      setValues({ ...values, ...history.location.state, isEdit: true });
    }
    history.push({
      state: {},
    });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    let expenseDate = '';
    if (selectedDate) {
      expenseDate = moment(new Date(selectedDate))
        .format('DD-MM-YYYY')
        .toString();
    }
    setValues({ ...values, error: false, loading: true });
    addExpense({
      purpose,
      category,
      amount,
      paymentStatus,
      message,
      expenseDate,
    })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          setValues({
            ...values,
            didRedirect: true,
          });
          history.push('/app/expenses');
          console.log('Add Expense Detail =====> ', data);
        }
      })
      .catch(console.log('Failed to Add Expense'));
  };

  const onUpdate = (event) => {
    event.preventDefault();
    console.log('values', values);
    updateExpense(values)
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          setValues({
            ...values,
            didRedirect: true,
          });
          history.push('/app/expenses');
        }
      })
      .catch((err) => console.log('Edit Exense request failed', err));
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  return (
    <div className='container pt-5'>
      {isEdit ? (
        <h2 className='text-center'>Edit Daily expense</h2>
      ) : (
        <h2 className='text-center'>Add Daily expense</h2>
      )}
      <form className='row'>
        <div className='col-md-5 pt-3'>
          <label htmlFor='selectedDate' className='form-label'>
            Expense Date
          </label>
          <br />
          <DatePicker
            id='selectedDate'
            className='form-control'
            selected={selectedDate}
            dateFormat='dd/MM/yyyy'
            maxDate={new Date()}
            isClearable
            showYearDropdown
            scrollableMonthYearDropdown
            placeholderText='Expense Date'
            onChange={(date) => setSelectedDate(date)}
          />
        </div>
        <div className='col-md-5 p-3'>
          <label htmlFor='purpose' className='form-label'>
            Purpose
          </label>
          <input
            id='purpose'
            className='form-control'
            placeholder=''
            onChange={handleChange('purpose')}
            value={purpose}
          />
        </div>

        <div className='col-md-5 p-3'>
          <label htmlFor='category' className='form-label'>
            Category
          </label>
          <select
            id='category'
            className='form-control'
            onChange={handleChange('category')}
            value={category}>
            <option>SELECT</option>
            <option value='Food'>Food</option>
            <option value='Petrol'>Petrol</option>
            <option value='Travel'>Travel</option>
            <option value='other'>Other</option>
          </select>
        </div>

        <div className='col-md-5 p-3'>
          <label htmlFor='amount' className='form-label'>
            Amount
          </label>
          <input
            type='number'
            id='amount'
            className='form-control'
            placeholder=''
            onChange={handleChange('amount')}
            value={amount}
          />
        </div>

        <div className='col-md-5 p-3'>
          <label htmlFor='paymentStatus' className='form-label'>
            Payment Status
          </label>
          <select
            id='paymentStatus'
            className='form-control'
            onChange={handleChange('paymentStatus')}
            value={paymentStatus}>
            <option>SELECT</option>
            <option value='Paid'>Paid</option>
            <option value='Pending'>Pending</option>
            <option value='Partial'>Partial</option>
          </select>
        </div>

        <div className='col-md-4 p-3'>
          <label htmlFor='message' className='form-label'>
            Message
          </label>
          <input
            type='text'
            className='form-control'
            id='message'
            placeholder='Message'
            onChange={handleChange('message')}
            value={message}
          />
        </div>
        <div className='col-12 text-center p-3'>
          {isEdit ? (
            <button
              type='submit'
              className='btn btn-primary btn-lg col-md-6'
              onClick={onUpdate}>
              Update
            </button>
          ) : (
            <button
              type='submit'
              className='btn btn-primary btn-lg col-md-6'
              onClick={onSubmit}>
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddExpense;
