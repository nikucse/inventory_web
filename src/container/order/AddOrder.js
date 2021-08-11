import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useHistory } from 'react-router-dom';
import { addOrder } from '../../service/OrderService';
import { getAllProduct } from '../../service/ProductService';
import { getAllClient } from '../../service/ClientService';
import { paymentModeOptions } from '../../util/billUtils';

const AddOrder = () => {
  const history = useHistory();
  const [selectedDate, setSelectedDate] = useState('');
  const [products, setProducts] = useState([]);
  const [clients, setClients] = useState([]);

  const [values, setValues] = useState({
    productId: '',
    clientId: '',
    quantity: '',
    deliveryDate: '',
    advance: '',
    amount: '',
    paymentMode,
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
    paymentMode,
    paymentStatus,
    error,
    loading,
    didRedirect,
  } = values;

  const loadData = () => {
    getAllProduct().then((data) => {
      setProducts(data);
      console.log(data);
    });
    getAllClient().then((data) => {
      setClients(data);
      console.log(data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

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
      paymentMode,
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
          history.push('/app/orders');
          console.log('Add Order Detail =====> ', data);
        }
      })
      .catch((err) => {
        console.log('Failed to Add Order ', err);
        history.push('/app/orders');
      });
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
            <div className='col-md-5 p-2'>
              <label htmlFor='productId' className='form-label'>
                Product Name
              </label>
              <select
                id='productId'
                className='form-control'
                onChange={handleChange('productId')}
                value={productId}>
                {products.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.productName}
                  </option>
                ))}
              </select>
            </div>
            <div className='col-md-5 p-2'>
              <label htmlFor='clientId' className='form-label'>
                Client Name
              </label>
              <select
                id='clientId'
                className='form-control'
                onChange={handleChange('clientId')}
                value={clientId}>
                {clients.map((client) => (
                  <option key={client.id} value={client.id}>
                    {client.fullName}
                  </option>
                ))}
              </select>
            </div>
            <div className='col-md-5 p-2'>
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
            <div className='col-md-5 p-2'>
              <label htmlFor='selectedDate' className='form-label'>
                Delivery Date
              </label>
              <br />
              <DatePicker
                id='selectedDate'
                className='form-control'
                selected={selectedDate}
                dateFormat='dd/MM/yyyy'
                minDate={new Date()}
                showYearDropdown
                scrollableMonthYearDropdown
                onChange={(date) => setSelectedDate(date)}
                placeholderText='Delivery Date'
              />
            </div>
            <div className='col-md-5 p-2'>
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

            <div className='col-md-5 p-2'>
              <label htmlFor='paymentMode' className='form-label'>
                Mode Of Payment
              </label>
              <select
                id='paymentMode'
                className='form-control'
                onChange={handleChange('paymentMode')}
                value={paymentMode}>
                {paymentModeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className='col-md-5 p-2'>
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
            <div className='col-md-5 p-2'></div>
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
