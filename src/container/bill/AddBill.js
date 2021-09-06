import React, { useState } from 'react';
import { uploadBill } from '../../service/BillService';
import { useHistory } from 'react-router-dom';
import { convertBase64 } from '../../util/BasicUtils';
import {
  billStatusOptions,
  billTypeOptions,
  paymentModeOptions,
} from '../../util/BillUtils';
import ImageUploader from '../../components/ImageUploader';

const AddBill = () => {
  let history = useHistory();

  const [values, setValues] = useState({
    billType: '',
    paymentMode: '',
    billImageLink: '',
    amount: '',
    status: '',
    message: '',
  });

  const { billType, paymentMode, amount, status, message } = values;

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('values', values);
    uploadBill(values)
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          setValues({
            ...values,
            didRedirect: true,
          });

          history.push('/app/bills');
          console.log('Upload bill =====> ', data);
        }
      })
      .catch((err) => {
        console.log('Add Product request failed', err);
        history.push('/app/bills');
      });
  };

  const handleChange = (name) => (event) => {
    console.log(event.target.value);
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const setImageData = async (imageData) => {
    const base64 = await convertBase64(imageData);
    setValues({ ...values, error: false, billImageLink: base64 });
  };

  return (
    <div className='container pt-3'>
      <h2 className='text-center p-3'>Upload Bill</h2>
      <form className='row g-3'>
        <div className='col-md-6'>
          <label htmlFor='billType' className='form-label'>
            Bill Type
          </label>
          <select
            id='billType'
            className='form-control'
            onChange={handleChange('billType')}
            value={billType}>
            {billTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <ImageUploader
          parentImageSet={setImageData}
          fieldLabel='Upload Bill Image'
          field='billImageLink'
        />
        <div className='col-md-6 pt-3'>
          <label htmlFor='amount' className='form-label'>
            Amount
          </label>
          <input
            type='Number'
            className='form-control'
            id='amount'
            placeholder='24800'
            onChange={handleChange('amount')}
            value={amount}
          />
        </div>

        <div className='col-md-6 pt-3'>
          <label htmlFor='status' className='form-label'>
            Status
          </label>
          <select
            id='status'
            className='form-control form-control'
            onChange={handleChange('status')}
            value={status}>
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

export default AddBill;
