import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  billStatusOptions,
  billTypeOptions,
  paymentModeOptions,
} from '../../util/billUtils';
import ImageUploader from '../../components/ImageUploader';
import { addPurchasingProduct } from '../../service/PurchasingService';

const AddPurchasingProduct = () => {
  let history = useHistory();

  const [values, setValues] = useState({
    productName: '',
    shopName: '',
    paymentMode: '',
    category: '',
    amount: '',
    balance: '',
    paymentStatus: '',
    message: '',
    error: false,
    loading: false,
    didRedirect: false,
  });

  const {
    productName,
    shopName,
    paymentMode,
    category,
    amount,
    balance,
    paymentStatus,
    message,
    error,
    loading,
    didRedirect,
  } = values;

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('values', values);
    addPurchasingProduct(values)
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          setValues({
            ...values,
            didRedirect: true,
          });

          history.push('/app/purchasing-product-list');
          console.log('Upload bill =====> ', data);
        }
      })
      .catch((err) => {
        console.log('Add Product request failed', err);
        history.push('/app/purchasing-product-list');
      });
  };

  const handleChange = (name) => (event) => {
    console.log(event.target.value);
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  return (
    <div className='container pt-3'>
      <h2 className='text-center p-3'>Add Purchasig Product</h2>
      <form className='row g-3'>
        <div className='col-md-6 pt-3'>
          <label htmlFor='productName' className='form-label'>
            Product Name
          </label>
          <input
            type='text'
            className='form-control'
            id='productName'
            placeholder='Product Name'
            onChange={handleChange('productName')}
            value={productName}
          />
        </div>

        <div className='col-md-6 pt-3'>
          <label htmlFor='shopName' className='form-label'>
            Shop Name
          </label>
          <input
            type='text'
            className='form-control'
            id='shopName'
            placeholder='Shop Name'
            onChange={handleChange('shopName')}
            value={shopName}
          />
        </div>

        <div className='col-md-6 pt-3'>
          <label htmlFor='category' className='form-label'>
            Category
          </label>
          <select
            id='category'
            className='form-control'
            onChange={handleChange('category')}
            value={category}>
            {billTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className='col-md-6 pt-3'>
          <label htmlFor='amount' className='form-label'>
            Amount
          </label>
          <input
            type='Number'
            className='form-control'
            id='amount'
            placeholder='Amount'
            onChange={handleChange('amount')}
            value={amount}
          />
        </div>

        <div className='col-md-6 pt-3'>
          <label htmlFor='balance' className='form-label'>
            Balance
          </label>
          <input
            type='Number'
            className='form-control'
            id='balance'
            placeholder='Balance'
            onChange={handleChange('balance')}
            value={balance}
          />
        </div>

        <div className='col-md-6 pt-3'>
          <label htmlFor='paymentStatus' className='form-label'>
            Payment Status
          </label>
          <select
            id='paymentStatus'
            className='form-control'
            onChange={handleChange('paymentStatus')}
            value={paymentStatus}>
            {billStatusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className='col-md-6 pt-3'>
          <label htmlFor='paymentMode' className='form-label'>
            Payment Mode
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

        <div className='col-md-6 p-3'>
          <label htmlFor='message' className='form-label'>
            Message
          </label>
          <textarea
            className='form-control'
            id='message'
            placeholder='Enter Some Extra Info'
            onChange={handleChange('message')}
            value={message}
          />
        </div>

        <div className='col-12 text-center'>
          <button
            type='submit'
            className='btn btn-primary btn-lg col-md-6'
            onClick={onSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPurchasingProduct;
