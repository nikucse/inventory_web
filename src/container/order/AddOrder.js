import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addOrder } from '../../service/OrderService';

const AddOrder = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const [values, setValues] = useState({
    productId: '',
    clientId: '',
    quantity: '',
    deliveryDate: '',
    advance: '',
    amount: '',
    deliveredBy: '',
    paymentStatus: '',
    error: '',
    loading: false,
    didRedirect: false,
  });

  const {
    productId,
    clientId,
    quantity,
    deliveryDate,
    advance,
    amount,
    deliveredBy,
    paymentStatus,
    error,
    loading,
    didRedirect,
  } = values;

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });

    addOrder({
      productId,
      clientId,
      quantity,
      deliveryDate: selectedDate,
      advance,
      amount,
      deliveredBy,
      paymentStatus,
    })
      .then((data) => {
        console.log(data);
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          setValues({
            ...values,
            didRedirect: true,
          });
          console.log('Add Order Detail =====> ', data);
        }
      })
      .catch(console.log('Failed to Add Order '));
  };

  const handleChange = (name) => (event) => {
    console.log(name, event);
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  return (
    <div>
      <div className='container'>
        <br />
        <h2 className='text-center'>Add Order</h2>
        <br />
        <form>
          <div className='row g-4 justify-content-center'>
            <div className='col-md-4 p-2'>
              <label htmlFor='productId' className='form-label'>
                Product Name
              </label>
              <input
                type='text'
                className='form-control'
                id='productId'
                placeholder='Product Name'
                onChange={handleChange('productId')}
                value={productId}
              />
            </div>
            <div className='col-md-4 p-2'>
              <label htmlFor='clientId' className='form-label'>
                Client Name
              </label>
              <input
                type='text'
                className='form-control'
                id='clientId'
                placeholder='Client Name'
                onChange={handleChange('clientId')}
                value={clientId}
              />
            </div>
            <div className='col-md-4 p-2'>
              <label htmlFor='quantity' className='form-label'>
                Quantity
              </label>
              <input
                type='number'
                className='form-control'
                id='quantity'
                placeholder='Quantity'
                onChange={handleChange('quantity')}
                value={quantity}
              />
            </div>
            <div className='col-md-4 p-2'>
              <label htmlFor='selectedDate' className='form-label'>
                Delivery Date
              </label>
              <br />
              <DatePicker
                id='selectedDate'
                className='form-control'
                selected={selectedDate}
                dateFormat='dd/MM/yyyy'
                maxDate={new Date()}
                showYearDropdown
                scrollableMonthYearDropdown
                onChange={(date) => setSelectedDate(date)}
                placeholderText='Delivery Date'
              />
            </div>
            <div className='col-md-4 p-2'>
              <label htmlFor='advance' className='form-label'>
                Advance Amount
              </label>
              <input
                type='number'
                className='form-control'
                id='advance'
                placeholder='Advance Amount'
                onChange={handleChange('advance')}
                value={advance}
              />
            </div>

            <div className='col-md-4 p-2'>
              <label htmlFor='paymentStatus' className='form-label'>
                Payment Status
              </label>
              <input
                type='text'
                className='form-control'
                id='paymentStatus'
                placeholder='Payment Status'
                onChange={handleChange('paymentStatus')}
                value={paymentStatus}
              />
            </div>
            <div className='col-md-7 text-center p-3'>
              <button
                type='submit'
                className='btn btn-primary btn-lg col-md-6'
                onClick={onSubmit}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      );
    </div>
  );
};

export default AddOrder;
