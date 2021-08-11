import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ImageUploader from '../../components/ImageUploader';
import { addBill } from '../../service/BillService';
import { convertBase64 } from '../../util/BasicUtils';
import {
  billTypeOptions,
  billStatusOptions,
  paymentModeOptions,
} from '../../util/billUtils';

const AddBill = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    billType: '',
    billImageLink: '',
    message: '',
    paymentMode: '',
    amount: '',
    status: '',
    error: false,
    loading: false,
    didRedirect: false,
  });

  const {
    billType,
    amount,
    paymentMode,
    billImageLink,
    status,
    message,
    error,
    loading,
    didRedirect,
  } = values;

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    console.log(billType, paymentMode, billImageLink, message, status, amount);
    addBill({
      billType,
      paymentMode,
      billImageLink,
      message,
      status,
      amount,
    })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          setValues({
            ...values,
            didRedirect: true,
          });
          console.log('Upload Bill Detail =====> ', data);
          history.push('/app/bills');
        }
      })
      .catch((err) => {
        console.log('Failed to Upload bill', err);
        history.push('/app/bills');
      });
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      error: false,
      [event.target.name]: event.target.value,
    });
    console.log(values);
  };

  const setImageData = async (imageData) => {
    const base64 = await convertBase64(imageData);
    console.log('base64 = ', base64);
    setValues({ ...values, error: false, billImageLink: base64 });
  };

  const getBillTemplate = () => (
    <div className='container p-5'>
      <h2 className='text-center'>Upload Bill</h2>
      <br />
      <form className='row g-3'>
        <div className='col-md-6 mb-3'>
          <label htmlFor='billType' className='form-label'>
            Bill Type
          </label>
          <select
            id='billType'
            className='form-control'
            name='billType'
            onChange={handleChange}
            value={billType}>
            {billTypeOptions.map((billType) => (
              <option key={billType.value} value={billType.value}>
                {billType.label}
              </option>
            ))}
          </select>
        </div>
        <ImageUploader
          parentImageSet={setImageData}
          fieldLabel='Bill Upload'
          field='billImageLink'
        />
        <div className='form-floating col-md-6'>
          <label htmlFor='amount' className='form-label'>
            Amount
          </label>
          <input
            type='number'
            className='form-control'
            name='amount'
            id='amount'
            placeholder='Amount'
            onChange={handleChange}
            value={amount}
          />
        </div>
        <div className='col-md-6 p-2'>
          <label htmlFor='paymentMode' className='form-label'>
            Mode Of Payment
          </label>
          <select
            id='paymentMode'
            className='form-control'
            name='paymentMode'
            onChange={handleChange}
            value={paymentMode}>
            {paymentModeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className='col-md-6'>
          <label htmlFor='message' className='form-label'>
            Message
          </label>
          <textarea
            type='text'
            className='form-control'
            id='message'
            name='message'
            placeholder='Message'
            onChange={handleChange}
            value={message}
          />
        </div>
        <div className='col-md-6 mb-3'>
          <label htmlFor='status' className='form-label'>
            Status
          </label>
          <select
            className='form-control'
            id='status'
            name='status'
            onChange={handleChange}
            value={status}>
            {billStatusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className='col-12 text-center p-3'>
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

  return <div>{getBillTemplate()}</div>;
};

export default AddBill;
